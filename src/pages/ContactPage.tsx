import ContactForm from '../components/ContactForm/ContactForm'

function ContactPage() {
  return (
    <section className="section" aria-labelledby="titulo-contacto">
      <h1 id="titulo-contacto">Hablemos</h1>
      <p className="section__intro">¿Te interesó mi perfil? Aquí puedes contactarme.</p>
      <ContactForm />
    </section>
  )
}

export default ContactPage
