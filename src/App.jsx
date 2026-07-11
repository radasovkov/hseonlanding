import './App.css'

const brandLinks = {
  email: 'hola@hseon.app',
  instagram: 'https://www.instagram.com/hseon.app/',
  appStore: 'https://apps.apple.com/es/search?term=hseon',
}

const benefits = [
  {
    number: '01',
    title: 'Cuenta lo que te pasó',
    text: 'Comparte una experiencia real, una decisión difícil o algo que aprendiste por el camino.',
  },
  {
    number: '02',
    title: 'Profundiza con IA',
    text: 'Un chat inteligente te ayuda a ordenar ideas, encontrar matices y convertir tu historia en algo útil.',
  },
  {
    number: '03',
    title: 'Ayuda a alguien más',
    text: 'Publica una conclusión clara para que otras personas encuentren contexto, no solo respuestas rápidas.',
  },
]

const subscriptionTerms = [
  'Acceso gratuito durante la etapa de lanzamiento.',
  'Cualquier precio futuro se mostrará antes de confirmar el pago.',
  'Las suscripciones de pago se renovarán automáticamente hasta su cancelación.',
  'Podrás cancelar desde los ajustes, sin permanencia ni penalización.',
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

function AppStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.8 7.4 6.1 12M15.2 7.4l2.7 4.6M9.9 5.6 12 2l2.1 3.6M5 15h14M7 19h1.5M15.5 19H17" />
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

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Hseon, inicio">
          <span className="brand-mark">H</span>
          <span>hseon</span>
        </a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#experiencias">Experiencias</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#suscripcion">Suscripción</a>
        </nav>
        <a className="nav-cta" href="#descarga">
          Probar Hseon
          <ArrowIcon />
        </a>
      </header>

      <main>
        <section className="hero section" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow">
              <SparkIcon />
              Historias reales. Conversaciones inteligentes.
            </div>
            <h1>Lo que viviste puede ayudar a alguien.</h1>
            <p className="hero-lede">
              Hseon es el espacio en español para compartir experiencias, hacer preguntas y llegar más lejos con chats de inteligencia artificial.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#descarga">
                Descargar la app
                <ArrowIcon />
              </a>
              <a className="button button-ghost" href="#experiencias">
                Ver cómo se siente
              </a>
            </div>
            <div className="hero-proof" aria-label="Datos de la comunidad">
              <div className="avatar-stack" aria-hidden="true">
                <span>LM</span>
                <span>AR</span>
                <span>SC</span>
                <span>+2k</span>
              </div>
              <p>
                <strong>Una comunidad que escucha</strong>
                <span>Conversaciones sin ruido ni respuestas vacías.</span>
              </p>
            </div>
          </div>

          <div className="hero-visual" aria-label="Vista previa de Hseon">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <PhoneFrame label="Pantalla de una conversación con inteligencia artificial en Hseon" className="hero-phone">
              <div className="app-topbar">
                <span className="mini-avatar ai-avatar">H</span>
                <div>
                  <strong>Guía Hseon</strong>
                  <small>En línea</small>
                </div>
                <span className="topbar-action">•••</span>
              </div>
              <div className="chat-date">Hoy</div>
              <div className="chat-bubble chat-bubble-in">
                ¿Qué aprendiste después de cambiar de carrera?
              </div>
              <div className="chat-bubble chat-bubble-out">
                Que no necesitaba tener todo resuelto para empezar.
              </div>
              <div className="ai-note">
                <SparkIcon />
                <p>
                  <strong>Eso puede ayudar a muchas personas.</strong>
                  ¿Qué te habría gustado saber antes de dar el paso?
                </p>
              </div>
              <div className="chat-composer">
                <span>Escribe tu respuesta…</span>
                <button type="button" aria-label="Enviar respuesta">↑</button>
              </div>
            </PhoneFrame>
            <div className="floating-card floating-card-top">
              <span className="floating-icon">✓</span>
              <p><strong>Experiencia publicada</strong><small>Lista para ayudar</small></p>
            </div>
            <div className="floating-card floating-card-bottom">
              <div className="mini-avatars" aria-hidden="true"><span>V</span><span>M</span><span>J</span></div>
              <p><strong>18 personas</strong><small>guardaron tu historia</small></p>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Principios de Hseon">
          <span>Experiencias verificadas por la comunidad</span>
          <span>IA para profundizar, no para sustituirte</span>
          <span>Diseñado primero en español</span>
        </section>

        <section className="section experience-section" id="experiencias">
          <div className="section-heading centered-heading">
            <p className="section-kicker">Así se ve Hseon</p>
            <h2>Una conversación puede convertirse en una guía.</h2>
            <p>Explora experiencias, pregunta con confianza y comparte lo que realmente te funcionó.</p>
          </div>

          <div className="screenshots-grid">
            <article className="screenshot-card screenshot-feed">
              <div className="screenshot-copy">
                <span>01 · Descubre</span>
                <h3>Historias con contexto, no titulares.</h3>
                <p>Encuentra personas que ya pasaron por algo parecido y entiende qué cambió de verdad.</p>
              </div>
              <PhoneFrame label="Pantalla de descubrimiento de experiencias en Hseon">
                <div className="feed-header">
                  <span className="brand-mark small">H</span>
                  <strong>Para ti</strong>
                  <span className="search-dot">⌕</span>
                </div>
                <div className="topic-row"><span>Trabajo</span><span>Bienestar</span><span>Viajes</span></div>
                <div className="story-card featured-story">
                  <div className="story-author"><span className="mini-avatar">MC</span><p><strong>Marina C.</strong><small>Hace 2 h</small></p></div>
                  <h4>Me mudé sola a otra ciudad. Esto es lo que nadie me contó.</h4>
                  <p>La parte difícil no fue encontrar casa, sino construir una rutina desde cero…</p>
                  <div className="story-meta"><span>♡ 148</span><span>24 respuestas</span></div>
                </div>
                <div className="story-card compact-story">
                  <div className="story-author"><span className="mini-avatar alt">JP</span><p><strong>Jorge P.</strong><small>Hace 5 h</small></p></div>
                  <h4>Cambiar de sector a los 35 sí fue posible.</h4>
                  <div className="story-meta"><span>♡ 92</span><span>Guardar</span></div>
                </div>
              </PhoneFrame>
            </article>

            <article className="screenshot-card screenshot-chat">
              <div className="screenshot-copy">
                <span>02 · Profundiza</span>
                <h3>Una IA que pregunta antes de responder.</h3>
                <p>Ordena lo que piensas y descubre los detalles que hacen que tu experiencia sea útil.</p>
              </div>
              <PhoneFrame label="Pantalla de chat reflexivo con inteligencia artificial en Hseon">
                <div className="app-topbar light-topbar">
                  <span className="back-arrow">‹</span>
                  <div><strong>Explorar una decisión</strong><small>Guía de IA</small></div>
                  <span className="topbar-action">•••</span>
                </div>
                <div className="chat-date">Sesión privada</div>
                <div className="chat-bubble chat-bubble-in">¿Qué era lo que más te frenaba?</div>
                <div className="chat-bubble chat-bubble-out">Pensar que empezar de nuevo era perder tiempo.</div>
                <div className="chat-bubble chat-bubble-in">¿Qué ocurrió para que empezaras a verlo de otra manera?</div>
                <div className="typing-row"><span /><span /><span /></div>
                <div className="chat-composer compact-composer"><span>Cuéntame más…</span><button type="button" aria-label="Enviar respuesta">↑</button></div>
              </PhoneFrame>
            </article>

            <article className="screenshot-card screenshot-publish">
              <div className="screenshot-copy">
                <span>03 · Comparte</span>
                <h3>Publica una conclusión que se recuerde.</h3>
                <p>La IA propone una estructura; tu voz y tus aprendizajes siguen siendo los protagonistas.</p>
              </div>
              <PhoneFrame label="Pantalla para publicar una experiencia en Hseon">
                <div className="publish-topbar"><span>Cancelar</span><strong>Nueva experiencia</strong><span>Vista previa</span></div>
                <div className="publish-form">
                  <span className="field-label">TÍTULO</span>
                  <h4>Lo que aprendí al empezar de cero en una ciudad nueva</h4>
                  <span className="field-label">TU CONCLUSIÓN</span>
                  <p>No necesitas sentirte preparada para comenzar. Necesitas una primera rutina, una persona a quien llamar y permiso para tardar.</p>
                  <div className="ai-suggestion"><SparkIcon /><p><strong>Sugerencia de Hseon</strong><small>Añade un ejemplo concreto de tu primera semana.</small></p></div>
                  <div className="tags"><span>#cambios</span><span>#vivirsola</span><span>#aprendizajes</span></div>
                  <button className="publish-button" type="button">Publicar experiencia</button>
                </div>
              </PhoneFrame>
            </article>
          </div>
        </section>

        <section className="section how-section" id="como-funciona">
          <div className="section-heading">
            <p className="section-kicker">Cómo funciona</p>
            <h2>Tu experiencia. Mejor explicada.</h2>
            <p>Hseon te acompaña desde la primera idea hasta una publicación capaz de ayudar a otra persona.</p>
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
              <p>Leer a alguien que ya había pasado por lo mismo me dio la claridad que necesitaba.</p>
              <div><span className="mini-avatar">LA</span><strong>Lucía, 29</strong></div>
            </div>
            <div className="quote-card quote-card-two">
              <span className="quote-mark">“</span>
              <p>El chat no me dio una respuesta prefabricada. Me ayudó a encontrar la mía.</p>
              <div><span className="mini-avatar alt">DM</span><strong>Diego, 34</strong></div>
            </div>
          </div>
          <div className="values-copy">
            <p className="section-kicker">Una comunidad más humana</p>
            <h2>La IA abre la conversación. Las personas le dan sentido.</h2>
            <p>Creemos en un internet donde compartir una experiencia sirva para comprender, decidir y acompañar.</p>
            <ul>
              <li><CheckIcon /><span><strong>Tu voz primero.</strong> La IA ordena y pregunta, pero nunca publica por ti.</span></li>
              <li><CheckIcon /><span><strong>Control de privacidad.</strong> Decide qué guardar, qué compartir y con quién.</span></li>
              <li><CheckIcon /><span><strong>Contenido útil.</strong> Diseñado para conversaciones respetuosas y experiencias concretas.</span></li>
            </ul>
          </div>
        </section>

        <section className="section subscription-section" id="suscripcion">
          <div className="subscription-copy">
            <p className="section-kicker">Suscripción</p>
            <h2>Empieza gratis. Decide después.</h2>
            <p>Durante el lanzamiento puedes explorar, conversar y publicar sin coste. Los planes de pago llegarán con funciones avanzadas y condiciones transparentes.</p>
            <ul className="terms-list">
              {subscriptionTerms.map((term) => (
                <li key={term}><CheckIcon />{term}</li>
              ))}
            </ul>
            <p className="legal-note">Las condiciones finales y el precio aplicable se mostrarán en la App Store antes de cualquier compra.</p>
          </div>
          <div className="plan-card">
            <div className="plan-badge">Acceso anticipado</div>
            <p className="plan-name">Hseon Comunidad</p>
            <div className="plan-price"><strong>0 €</strong><span>durante el lanzamiento</span></div>
            <div className="plan-divider" />
            <ul>
              <li><CheckIcon />Explorar experiencias sin límite</li>
              <li><CheckIcon />Chats de IA para profundizar</li>
              <li><CheckIcon />Publicar y guardar historias</li>
              <li><CheckIcon />Controles de privacidad</li>
            </ul>
            <a className="button button-primary full-button" href={brandLinks.appStore} target="_blank" rel="noreferrer">
              Ver en App Store
              <ArrowIcon />
            </a>
            <small>Disponible próximamente. Sin tarjeta para unirte a la lista.</small>
          </div>
        </section>

        <section className="download-section" id="descarga">
          <div className="download-glow" />
          <div className="download-content">
            <p className="section-kicker light-kicker">Tu historia empieza aquí</p>
            <h2>Comparte lo que sabes. Descubre lo que otros vivieron.</h2>
            <p>Únete al lanzamiento de Hseon y ayúdanos a construir una comunidad en español donde cada experiencia cuenta.</p>
            <div className="download-actions">
              <a className="store-button" href={brandLinks.appStore} target="_blank" rel="noreferrer">
                <AppStoreIcon />
                <span><small>Disponible próximamente en</small><strong>App Store</strong></span>
              </a>
              <a className="contact-link" href={`mailto:${brandLinks.email}`}>
                Avisarme del lanzamiento
                <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="download-phone" aria-hidden="true">
            <PhoneFrame label="Pantalla de bienvenida de Hseon">
              <div className="welcome-screen">
                <span className="welcome-logo">H</span>
                <p>Una experiencia puede cambiar otra.</p>
                <div className="welcome-lines"><span /><span /><span /></div>
              </div>
            </PhoneFrame>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contacto">
        <div className="footer-main">
          <div>
            <a className="brand footer-brand" href="#inicio"><span className="brand-mark">H</span><span>hseon</span></a>
            <p>Un lugar en español para compartir experiencias y convertirlas en conocimiento con ayuda de la IA.</p>
          </div>
          <div className="footer-column">
            <strong>Explora</strong>
            <a href="#experiencias">Experiencias</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#suscripcion">Suscripción</a>
          </div>
          <div className="footer-column">
            <strong>Contacto</strong>
            <a href={`mailto:${brandLinks.email}`}>{brandLinks.email}</a>
            <a href={brandLinks.instagram} target="_blank" rel="noreferrer" className="social-link"><InstagramIcon />Instagram</a>
            <a href={brandLinks.appStore} target="_blank" rel="noreferrer" className="social-link"><AppStoreIcon />App Store</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Hseon. Todos los derechos reservados.</span>
          <div><a href="#suscripcion">Condiciones</a><a href="mailto:hola@hseon.app?subject=Privacidad%20en%20Hseon">Privacidad</a></div>
        </div>
      </footer>
    </div>
  )
}

export default App
