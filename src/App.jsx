import './App.css'
import './additions.css'

const brandLinks = {
  email: 'hola@hse.onl',
  instagram: 'https://www.instagram.com/hse.onl/',
  appStore: 'https://apps.apple.com/es/search?term=HSE.onl',
}

const benefits = [
  {
    number: '01',
    title: 'Sube tu currículum',
    text: 'Importa tu trayectoria para que HSE.onl detecte cambios, decisiones y aprendizajes que merecen una buena pregunta.',
  },
  {
    number: '02',
    title: 'Ayuda a alguien más',
    text: 'Responde preguntas concretas sobre tu carrera y convierte lo que aprendiste en contexto útil para otras personas.',
  },
  {
    number: '03',
    title: 'Aprende de tus errores',
    text: 'Revisar tus propias respuestas te ayuda a identificar patrones, entender tus decisiones y tomar mejores caminos.',
  },
]

const subscriptionTerms = [
  '20 € por un mes de acceso.',
  'La suscripción se renueva automáticamente cada mes hasta que la canceles.',
  'Puedes cancelar en cualquier momento desde los ajustes de tu cuenta de Apple.',
  'El cobro y la gestión de la suscripción se realizan a través del App Store.',
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11m-4-4 4 4-4 4" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c.8 4.4 2.6 6.2 7 7-4.4.8-6.2 2.6-7 7-.8-4.4-2.6-6.2-7-7 4.4-.8 6.2-2.6 7-7Z" />
      <path d="M19 16c.3 1.7 1 2.4 2.7 2.7-1.7.3-2.4 1-2.7 2.7-.3-1.7-1-2.4-2.7-2.7 1.7-.3 2.4-1 2.7-2.7Z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4 10 4 4 8-9" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className="fill-dot" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 32 38" aria-hidden="true">
      <path
        fill="currentColor"
        d="M26.4 20.2c0-5.2 4.3-7.7 4.5-7.8-2.4-3.6-6.2-4-7.6-4.1-3.2-.3-6.3 1.9-7.9 1.9-1.7 0-4.2-1.8-6.9-1.8-3.5.1-6.8 2.1-8.6 5.2-3.7 6.4-.9 15.9 2.6 21.1 1.7 2.5 3.8 5.3 6.5 5.2 2.6-.1 3.6-1.7 6.8-1.7 3.1 0 4.1 1.7 6.9 1.6 2.8-.1 4.6-2.5 6.3-5 2-2.9 2.8-5.8 2.8-6-.1 0-5.4-2.1-5.4-8.6ZM21.2 4.9C22.6 3.2 23.5.8 23.3-1.5c-2 .1-4.5 1.4-5.9 3.1-1.3 1.5-2.4 3.9-2.1 6.1 2.2.2 4.5-1.1 5.9-2.8Z"
        transform="translate(0 2)"
      />
    </svg>
  )
}

function PhoneFrame({ children, label, className = '' }) {
  return (
    <div className={`phone-frame ${className}`} role="img" aria-label={label}>
      <div className="phone-speaker" />
      <div className="phone-screen">{children}</div>
      <div className="phone-home" />
    </div>
  )
}

function FeedHeader({ title = 'Para ti', back = false }) {
  return (
    <div className="career-feed-header">
      <span className="feed-header-side">{back ? '‹' : <span className="brand-mark small">H</span>}</span>
      <strong>{title}</strong>
      <span className="feed-header-side feed-menu">•••</span>
    </div>
  )
}

function QuestionPost({ initials, role, time, question, preview, answers, accent = '' }) {
  return (
    <article className={`question-post ${accent}`}>
      <div className="question-post-author">
        <span className="mini-avatar">{initials}</span>
        <p>
          <strong>Pregunta de HSE.onl</strong>
          <small>{role} · {time}</small>
        </p>
        <SparkIcon />
      </div>
      <h4>{question}</h4>
      {preview && <p className="answer-preview">{preview}</p>}
      <div className="question-post-actions">
        <span>♡</span>
        <span>↗</span>
        <button type="button">{answers} respuestas</button>
      </div>
    </article>
  )
}

function AppStoreBadge({ compact = false }) {
  return (
    <a
      className={`official-store-badge ${compact ? 'compact-store-badge' : ''}`}
      href={brandLinks.appStore}
      target="_blank"
      rel="noreferrer"
      aria-label="Descargar HSE.onl en el App Store"
    >
      <AppleIcon />
      <span>
        <small>Descárgalo en el</small>
        <strong>App Store</strong>
      </span>
    </a>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="HSE.onl, inicio">
          <span className="brand-mark">H</span>
          <span className="brand-word">HSE.onl</span>
        </a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#feed">Feed profesional</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#suscripcion">Suscripción</a>
        </nav>
        <a className="nav-cta" href={brandLinks.appStore} target="_blank" rel="noreferrer">
          Descargar
          <ArrowIcon />
        </a>
      </header>

      <main>
        <section className="hero section" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow">
              <SparkIcon />
              Preguntas de IA. Respuestas de profesionales.
            </div>
            <h1>Tu carrera puede enseñar a alguien.</h1>
            <p className="hero-lede">
              HSE.onl convierte trayectorias profesionales en preguntas útiles. Descubre cómo otras personas tomaron decisiones, superaron errores y construyeron su carrera.
            </p>
            <div className="hero-actions">
              <AppStoreBadge compact />
              <a className="button button-ghost" href="#feed">
                Ver el feed
              </a>
            </div>
            <div className="hero-proof" aria-label="Propuesta de la comunidad">
              <div className="avatar-stack" aria-hidden="true">
                <span>PM</span>
                <span>UX</span>
                <span>DS</span>
                <span>+2k</span>
              </div>
              <p>
                <strong>Aprende de carreras reales</strong>
                <span>Preguntas generadas por IA, respuestas escritas por personas.</span>
              </p>
            </div>
          </div>

          <div className="hero-visual" aria-label="Vista previa del feed profesional de HSE.onl">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <PhoneFrame label="Feed de preguntas profesionales de HSE.onl" className="hero-phone feed-phone">
              <FeedHeader />
              <div className="feed-tabs"><span className="active">Recomendado</span><span>Siguiendo</span></div>
              <div className="career-feed-scroll">
                <QuestionPost
                  initials="IA"
                  role="Producto"
                  time="12 min"
                  question="¿Qué error de producto te enseñó más que cualquier lanzamiento exitoso?"
                  preview="Cancelé una funcionalidad después de seis meses. El problema no era la ejecución: nunca validamos la urgencia…"
                  answers="38"
                  accent="featured-question"
                />
                <QuestionPost
                  initials="IA"
                  role="Cambio de carrera"
                  time="34 min"
                  question="¿Cómo supiste que era momento de dejar una profesión estable?"
                  answers="24"
                />
                <QuestionPost
                  initials="IA"
                  role="Liderazgo"
                  time="1 h"
                  question="¿Qué conversación difícil evitaste demasiado tiempo como manager?"
                  answers="51"
                />
              </div>
              <div className="feed-bottom-nav"><span>⌂</span><span>⌕</span><span className="feed-add">+</span><span>♧</span><span>○</span></div>
            </PhoneFrame>
            <div className="floating-card floating-card-top">
              <span className="floating-icon">CV</span>
              <p><strong>Trayectoria analizada</strong><small>12 preguntas preparadas</small></p>
            </div>
            <div className="floating-card floating-card-bottom">
              <div className="mini-avatars" aria-hidden="true"><span>M</span><span>L</span><span>J</span></div>
              <p><strong>38 profesionales</strong><small>respondieron esta pregunta</small></p>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Principios de HSE.onl">
          <span>Tu currículum inicia la conversación</span>
          <span>La IA pregunta; las personas responden</span>
          <span>Historias centradas en la carrera</span>
        </section>

        <section className="section experience-section" id="feed">
          <div className="section-heading centered-heading">
            <p className="section-kicker">Así se ve HSE.onl</p>
            <h2>Un feed para entender cómo se construyen las carreras.</h2>
            <p>Desliza preguntas, abre los hilos que te interesan y compara respuestas de personas con trayectorias distintas.</p>
          </div>

          <div className="screenshots-grid career-screenshots-grid">
            <article className="screenshot-card screenshot-feed">
              <div className="screenshot-copy">
                <span>01 · Descubre</span>
                <h3>Preguntas que nacen de trayectorias profesionales.</h3>
                <p>La IA transforma momentos de carrera en preguntas concretas que merecen respuestas con contexto.</p>
              </div>
              <PhoneFrame label="Feed infinito de preguntas profesionales en HSE.onl" className="feed-phone">
                <FeedHeader />
                <div className="feed-tabs"><span className="active">Para ti</span><span>Recientes</span></div>
                <div className="career-feed-scroll">
                  <QuestionPost
                    initials="IA"
                    role="Emprendimiento"
                    time="8 min"
                    question="¿Cuál fue la señal más clara de que tu primera idea de negocio no funcionaba?"
                    preview="Las personas elogiaban la demo, pero nadie cambiaba su proceso para usarla…"
                    answers="42"
                    accent="featured-question"
                  />
                  <QuestionPost
                    initials="IA"
                    role="Tecnología"
                    time="27 min"
                    question="¿Qué habilidad subestimaste al pasar de ingeniería a liderazgo?"
                    answers="31"
                  />
                  <QuestionPost
                    initials="IA"
                    role="Primer empleo"
                    time="46 min"
                    question="¿Qué habrías negociado de otra manera en tu primer contrato?"
                    answers="64"
                  />
                </div>
              </PhoneFrame>
            </article>

            <article className="screenshot-card screenshot-chat">
              <div className="screenshot-copy">
                <span>02 · Compara</span>
                <h3>Toca una pregunta y lee cómo la resolvieron otros.</h3>
                <p>Cada hilo reúne respuestas breves, perfiles profesionales y aprendizajes que puedes guardar.</p>
              </div>
              <PhoneFrame label="Hilo con respuestas profesionales en HSE.onl" className="thread-phone">
                <FeedHeader title="38 respuestas" back />
                <div className="thread-question">
                  <span><SparkIcon /> Pregunta generada por IA</span>
                  <h4>¿Qué error de producto te enseñó más que cualquier lanzamiento exitoso?</h4>
                </div>
                <div className="thread-answer">
                  <div className="story-author"><span className="mini-avatar">MC</span><p><strong>Marina C.</strong><small>Product Lead · Madrid</small></p></div>
                  <p>Construimos para usuarios avanzados porque eran quienes más hablaban. Los nuevos usuarios abandonaban antes de llegar al valor.</p>
                  <div className="thread-meta"><span>♡ 148</span><span>Responder</span><span>Guardar</span></div>
                </div>
                <div className="thread-answer">
                  <div className="story-author"><span className="mini-avatar alt">JP</span><p><strong>Jorge P.</strong><small>Founder · Valencia</small></p></div>
                  <p>Confundí interés con intención de compra. Desde entonces pregunto qué dejarían de usar para adoptar mi producto.</p>
                  <div className="thread-meta"><span>♡ 92</span><span>Responder</span><span>Guardar</span></div>
                </div>
                <button className="answer-question-button" type="button">Añadir mi respuesta</button>
              </PhoneFrame>
            </article>

            <article className="screenshot-card screenshot-publish">
              <div className="screenshot-copy">
                <span>03 · Reflexiona</span>
                <h3>Responde para ayudar y entender mejor tu propia carrera.</h3>
                <p>Tu currículum aporta el contexto; tus respuestas convierten decisiones y errores en aprendizaje.</p>
              </div>
              <PhoneFrame label="Pantalla para responder una pregunta profesional en HSE.onl" className="answer-phone">
                <FeedHeader title="Tu respuesta" back />
                <div className="answer-context">
                  <span>Pregunta sugerida a partir de tu CV</span>
                  <h4>¿Qué aprendiste al cambiar de una empresa grande a una startup?</h4>
                </div>
                <div className="answer-editor">
                  <p>Al principio intenté reproducir procesos que solo funcionaban con equipos mucho más grandes. Aprendí a distinguir entre control y claridad…</p>
                  <span className="editor-cursor" />
                </div>
                <div className="reflection-card">
                  <SparkIcon />
                  <p><strong>Una pregunta para profundizar</strong><small>¿Qué proceso eliminaste primero y qué cambió después?</small></p>
                </div>
                <div className="answer-tags"><span>#cambiodecarrera</span><span>#startups</span></div>
                <button className="publish-button" type="button">Publicar respuesta</button>
              </PhoneFrame>
            </article>
          </div>
        </section>

        <section className="section how-section" id="como-funciona">
          <div className="section-heading">
            <p className="section-kicker">Cómo funciona</p>
            <h2>Tu currículum abre preguntas que vale la pena responder.</h2>
            <p>HSE.onl convierte tu trayectoria en una oportunidad para ayudar a otros y revisar tu propio aprendizaje profesional.</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.number}>
                <span className="benefit-number">{benefit.number}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section values-section">
          <div className="values-visual">
            <div className="quote-card quote-card-one">
              <span className="quote-mark">“</span>
              <p>Leer varias respuestas a la misma pregunta me mostró que no existe una sola carrera correcta.</p>
              <div><span className="mini-avatar">LA</span><strong>Lucía, Product Manager</strong></div>
            </div>
            <div className="quote-card quote-card-two">
              <span className="quote-mark">“</span>
              <p>Responder me obligó a entender por qué repetía el mismo error al cambiar de equipo.</p>
              <div><span className="mini-avatar alt">DM</span><strong>Diego, Data Lead</strong></div>
            </div>
          </div>
          <div className="values-copy">
            <p className="section-kicker">Aprendizaje profesional colectivo</p>
            <h2>La IA encuentra la pregunta. Las personas aportan la experiencia.</h2>
            <p>HSE.onl no inventa historias: genera preguntas a partir de trayectorias y reúne respuestas humanas en un feed enfocado en la carrera.</p>
            <ul>
              <li><CheckIcon /><span><strong>Contexto profesional.</strong> El CV ayuda a proponer preguntas relevantes para cada etapa.</span></li>
              <li><CheckIcon /><span><strong>Respuestas humanas.</strong> Cada aprendizaje publicado pertenece a la persona que lo vivió.</span></li>
              <li><CheckIcon /><span><strong>Reflexión propia.</strong> Responder también te permite estudiar tus decisiones y patrones.</span></li>
            </ul>
          </div>
        </section>

        <section className="section subscription-section" id="suscripcion">
          <div className="subscription-copy">
            <p className="section-kicker">Suscripción</p>
            <h2>Un mes para estudiar carreras, incluida la tuya.</h2>
            <p>Accede al feed completo, abre todos los hilos y recibe preguntas profesionales generadas a partir de tu currículum.</p>
            <ul className="terms-list">
              {subscriptionTerms.map((term) => (
                <li key={term}><CheckIcon />{term}</li>
              ))}
            </ul>
            <p className="legal-note">El precio y las condiciones de renovación se muestran también en el App Store antes de confirmar la compra.</p>
          </div>
          <div className="plan-card">
            <div className="plan-badge">Suscripción mensual</div>
            <p className="plan-name">HSE.onl</p>
            <div className="plan-price"><strong>20 €</strong><span>por mes</span></div>
            <div className="plan-divider" />
            <ul>
              <li><CheckIcon />Feed profesional completo</li>
              <li><CheckIcon />Preguntas generadas a partir de tu CV</li>
              <li><CheckIcon />Todos los hilos y respuestas</li>
              <li><CheckIcon />Publicaciones y guardados sin límite</li>
            </ul>
            <AppStoreBadge />
            <small>Disponible ahora en el App Store. La suscripción se gestiona con tu cuenta de Apple.</small>
          </div>
        </section>

        <section className="download-section" id="descarga">
          <div className="download-glow" />
          <div className="download-content">
            <p className="section-kicker light-kicker">Tu carrera tiene respuestas</p>
            <h2>Descubre lo que otros aprendieron. Entiende mejor lo que aprendiste tú.</h2>
            <p>Descarga HSE.onl, sube tu currículum y entra en un feed de preguntas que convierte carreras en conocimiento compartido.</p>
            <div className="download-actions">
              <AppStoreBadge />
              <a className="contact-link" href={`mailto:${brandLinks.email}`}>
                Contactar
                <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="download-phone" aria-hidden="true">
            <PhoneFrame label="Pantalla de bienvenida de HSE.onl">
              <div className="welcome-screen">
                <span className="welcome-logo">H</span>
                <p>Tu carrera puede enseñar a alguien.</p>
                <div className="welcome-lines"><span /><span /><span /></div>
              </div>
            </PhoneFrame>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contacto">
        <div className="footer-main">
          <div>
            <a className="brand footer-brand" href="#inicio"><span className="brand-mark">H</span><span className="brand-word">HSE.onl</span></a>
            <p>Un feed profesional en español con preguntas de IA y respuestas de personas que comparten lo aprendido en su carrera.</p>
          </div>
          <div className="footer-column">
            <strong>Explora</strong>
            <a href="#feed">Feed profesional</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#suscripcion">Suscripción</a>
          </div>
          <div className="footer-column">
            <strong>Contacto</strong>
            <a href={`mailto:${brandLinks.email}`}>{brandLinks.email}</a>
            <a href={brandLinks.instagram} target="_blank" rel="noreferrer" className="social-link"><InstagramIcon />Instagram</a>
            <a href={brandLinks.appStore} target="_blank" rel="noreferrer" className="social-link"><AppleIcon />App Store</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 HSE.onl. Todos los derechos reservados.</span>
          <div><a href="#suscripcion">Condiciones</a><a href={`mailto:${brandLinks.email}?subject=Privacidad%20en%20HSE.onl`}>Privacidad</a></div>
        </div>
      </footer>
    </div>
  )
}

export default App
