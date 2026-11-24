import type { StatusKind } from '../../types'
import './StatusMessage.css'

interface StatusMessageProps {
  tipo: StatusKind
  mensaje: string
}

function StatusMessage({ tipo, mensaje }: StatusMessageProps) {
  if (tipo === 'error') {
    return (
      <div className="status-message status-message--error" role="alert">
        No fue posible obtener los datos: {mensaje}
      </div>
    )
  }

  return (
    <div className="status-message" role="status" aria-live="polite">
      {mensaje}
    </div>
  )
}

export default StatusMessage
