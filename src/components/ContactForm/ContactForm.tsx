import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import type { ContactErrors, ContactValues } from '../../types'
import './ContactForm.css'

const valoresVacios: ContactValues = { nombre: '', email: '', mensaje: '' }

const validar = (valores: ContactValues): ContactErrors => {
  const errores: ContactErrors = {}
  if (valores.nombre.trim().length < 3) {
    errores.nombre = 'Escribe tu nombre completo (mínimo 3 letras).'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.email)) {
    errores.email = 'Escribe un correo válido, por ejemplo nombre@correo.cl.'
  }
  if (valores.mensaje.trim().length < 10) {
    errores.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
  }
  return errores
}

function ContactForm() {
  const [valores, setValores] = useState<ContactValues>(valoresVacios)
  const [errores, setErrores] = useState<ContactErrors>({})
  const [enviadoA, setEnviadoA] = useState<string | null>(null)

  const manejarCambio = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValores({ ...valores, [name]: value })
  }

  const manejarEnvio = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nuevosErrores = validar(valores)
    setErrores(nuevosErrores)
    if (Object.keys(nuevosErrores).length > 0) {
      setEnviadoA(null)
      return
    }
    setEnviadoA(valores.nombre.trim())
    setValores(valoresVacios)
  }

  return (
    <form className="contact-form" onSubmit={manejarEnvio} noValidate>
      <div className="contact-form__group">
        <label htmlFor="nombre" className="contact-form__label">
          Nombre completo:
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          className="contact-form__input"
          value={valores.nombre}
          onChange={manejarCambio}
          aria-invalid={Boolean(errores.nombre)}
          aria-describedby={errores.nombre ? 'error-nombre' : undefined}
        />
        {errores.nombre && (
          <p id="error-nombre" className="contact-form__error">
            {errores.nombre}
          </p>
        )}
      </div>

      <div className="contact-form__group">
        <label htmlFor="email" className="contact-form__label">
          Correo electrónico:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="contact-form__input"
          value={valores.email}
          onChange={manejarCambio}
          aria-invalid={Boolean(errores.email)}
          aria-describedby={errores.email ? 'error-email' : undefined}
        />
        {errores.email && (
          <p id="error-email" className="contact-form__error">
            {errores.email}
          </p>
        )}
      </div>

      <div className="contact-form__group">
        <label htmlFor="mensaje" className="contact-form__label">
          Tu mensaje:
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          className="contact-form__input"
          value={valores.mensaje}
          onChange={manejarCambio}
          aria-invalid={Boolean(errores.mensaje)}
          aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
        />
        {errores.mensaje && (
          <p id="error-mensaje" className="contact-form__error">
            {errores.mensaje}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn--block">
        Enviar mensaje
      </button>

      <div aria-live="polite">
        {enviadoA && (
          <p className="contact-form__success">
            Gracias, {enviadoA}. Tu mensaje fue enviado.
          </p>
        )}
      </div>
    </form>
  )
}

export default ContactForm
