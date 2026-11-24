import { useEffect, useState } from 'react'
import type { FetchState } from '../types'
import { mensajePorEstado } from '../services/apiService'

export function useFetchApi<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    const abortController = new AbortController()

    const cargar = async () => {
      setState((prev) => ({ ...prev, loading: true, error: null }))
      try {
        const response = await fetch(url, { signal: abortController.signal })
        if (!response.ok) {
          throw new Error(mensajePorEstado(response.status))
        }
        const result: T = await response.json()
        setState({ data: result, loading: false, error: null })
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return
        const mensaje =
          err instanceof TypeError
            ? 'No hay conexión con el servidor. Revisa tu internet.'
            : err instanceof Error
              ? err.message
              : 'Ocurrió un error al consultar la API.'
        setState({ data: null, loading: false, error: mensaje })
      }
    }

    cargar()

    return () => {
      abortController.abort()
    }
  }, [url])

  return state
}
