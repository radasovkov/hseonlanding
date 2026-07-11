import './App.css'

const pilares = [
  {
    titulo: 'Comparte lo que vives',
    descripcion:
      'Publica experiencias reales, dudas y aprendizajes para que otras personas encuentren respuestas útiles.',
  },
  {
    titulo: 'Conversa con IA',
    descripcion:
      'Inicia chats inteligentes que entienden tu contexto y te ayudan a profundizar cada tema.',
  },
  {
    titulo: 'Aprende en comunidad',
    descripcion:
      'Conecta con personas que pasaron por lo mismo y transforma ideas en conocimiento accionable.',
  },
]

const pasos = [
  'Describe tu experiencia en español en pocos segundos.',
  'Recibe preguntas de seguimiento en un chat con inteligencia artificial.',
  'Publica conclusiones claras para ayudar a toda la comunidad.',
]

function App() {
  return (
    <main className="landing">
      <section className="hero">
        <p className="badge">Portal en español</p>
        <h1>Un lugar para compartir conocimientos y experiencias con ayuda de la IA</h1>
        <p className="hero-text">
          Inspirado en la idea de Quora, este espacio une historias reales y chats inteligentes para aprender entre todos.
        </p>
        <div className="cta-group">
          <button type="button" className="primary">
            Empezar un chat
          </button>
          <button type="button" className="secondary">
            Explorar experiencias
          </button>
        </div>
      </section>

      <section className="grid" aria-label="Pilares del portal">
        {pilares.map((pilar) => (
          <article key={pilar.titulo} className="card">
            <h2>{pilar.titulo}</h2>
            <p>{pilar.descripcion}</p>
          </article>
        ))}
      </section>

      <section className="how-it-works">
        <h2>Cómo funciona</h2>
        <ol>
          {pasos.map((paso) => (
            <li key={paso}>{paso}</li>
          ))}
        </ol>
      </section>
    </main>
  )
}

export default App
