import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Tema, ThemeContextValue } from '../types'

const ThemeContext = createContext<ThemeContextValue | null>(null)

interface ThemeProviderProps {
  children: ReactNode
}

const temaInicial = (): Tema => {
  const guardado = localStorage.getItem('tema')
  return guardado === 'oscuro' ? 'oscuro' : 'claro'
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [tema, setTema] = useState<Tema>(temaInicial)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema)
    localStorage.setItem('tema', tema)
  }, [tema])

  const cambiarTema = () => {
    setTema((actual) => (actual === 'claro' ? 'oscuro' : 'claro'))
  }

  return (
    <ThemeContext.Provider value={{ tema, cambiarTema }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const contexto = useContext(ThemeContext)
  if (!contexto) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider')
  }
  return contexto
}
