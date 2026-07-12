import './contentEnhancements.css'

const questionExamples = [
  {
    mascot: '🐙',
    author: 'Pulpo pregunta',
    role: 'Contabilidad',
    time: '8 min',
    question: '¿Qué errores ves más a menudo al preparar conciliaciones bancarias?',
    preview: 'En mi primer cierre mensual descubrí que las diferencias pequeñas suelen revelar problemas de proceso mucho mayores…',
  },
  {
    mascot: '🐋',
    author: 'Ballena pregunta',
    role: 'Ingeniería',
    time: '18 min',
    question: '¿Cómo respondes una pregunta técnica cuando no recuerdas la fórmula exacta?',
  },
  {
    mascot: '🐬',
    author: 'Delfín pregunta',
    role: 'Derecho',
    time: '31 min',
    question: '¿Qué errores cometen muchos candidatos al explicar un caso jurídico en una entrevista?',
  },
  {
    mascot: '🦀',
    author: 'Cangrejo pregunta',
    role: 'Contabilidad',
    time: '6 min',
    question: '¿Qué habilidades de Excel utilizas de verdad en un puesto junior de contabilidad?',
    preview: 'Las tablas dinámicas ayudaron, pero aprender a rastrear el origen de una cifra fue mucho más importante…',
  },
  {
    mascot: '🦈',
    author: 'Tiburón pregunta',
    role: 'Ingeniería',
    time: '22 min',
    question: '¿Qué experiencia práctica marca más diferencia al empezar en ingeniería civil?',
  },
  {
    mascot: '🐢',
    author: 'Tortuga pregunta',
    role: 'Derecho',
    time: '44 min',
    question: '¿Qué habilidad te ayudó más durante tus primeras prácticas en un despacho?',
  },
]

const benefitCopy = [
  {
    title: 'Sube tu currículum',
    text: 'Importa tus habilidades técnicas y tu experiencia para que HSE.onl genere preguntas útiles que ayuden a otras personas a prepararse para pruebas, entrevistas y retos profesionales.',
  },
  {
    title: 'Ayuda a alguien más',
    text: 'Responde preguntas concretas sobre herramientas, conocimientos y situaciones reales para enriquecer la preparación profesional de otras personas.',
  },
  {
    title: 'Descubre tus fortalezas',
    text: 'Una IA de última generación analiza tus respuestas y sugiere automáticamente tus habilidades destacadas, posibles debilidades y áreas de conocimiento que conviene reforzar.',
  },
]

function updateQuestionPosts() {
  document.querySelectorAll('.question-post').forEach((post, index) => {
    const example = questionExamples[index % questionExamples.length]
    const avatar = post.querySelector('.question-post-author .mini-avatar')
    const author = post.querySelector('.question-post-author strong')
    const metadata = post.querySelector('.question-post-author small')
    const question = post.querySelector('h4')
    const actions = post.querySelector('.question-post-actions')
    let preview = post.querySelector('.answer-preview')

    if (avatar) {
      avatar.textContent = example.mascot
      avatar.classList.add('ocean-mascot')
      avatar.setAttribute('aria-label', example.author)
    }
    if (author) author.textContent = example.author
    if (metadata) metadata.textContent = `${example.role} · ${example.time}`
    if (question) question.textContent = example.question

    if (example.preview) {
      if (!preview && actions) {
        preview = document.createElement('p')
        preview.className = 'answer-preview'
        post.insertBefore(preview, actions)
      }
      if (preview) preview.textContent = example.preview
    } else if (preview) {
      preview.remove()
    }
  })
}

function updateBenefits() {
  document.querySelectorAll('.benefit-card').forEach((card, index) => {
    const copy = benefitCopy[index]
    if (!copy) return
    const title = card.querySelector('h3')
    const text = card.querySelector('p')
    if (title) title.textContent = copy.title
    if (text) text.textContent = copy.text
  })
}

function updateSupportingCopy() {
  const replacements = new Map([
    ['La IA transforma momentos de carrera en preguntas concretas que merecen respuestas con contexto.', 'La IA transforma habilidades técnicas y experiencia profesional en preguntas útiles para pruebas, entrevistas y aprendizaje práctico.'],
    ['Tu currículum aporta el contexto; tus respuestas convierten decisiones y errores en aprendizaje.', 'Tu currículum aporta el contexto; una IA avanzada analiza tus respuestas y detecta fortalezas y áreas de mejora.'],
    ['Responder también te permite estudiar tus decisiones y patrones.', 'El análisis de tus respuestas sugiere automáticamente habilidades, debilidades y conocimientos que puedes reforzar.'],
  ])

  document.querySelectorAll('p, span').forEach((element) => {
    const replacement = replacements.get(element.textContent.trim())
    if (replacement) element.textContent = replacement
  })
}

function hasRenderedContent() {
  return Boolean(
    document.querySelector('.question-post') &&
    document.querySelector('.benefit-card'),
  )
}

export function applyContentEnhancements() {
  let frame = 0
  const maxFrames = 120

  const applyWhenReady = () => {
    if (hasRenderedContent()) {
      updateQuestionPosts()
      updateBenefits()
      updateSupportingCopy()
      return
    }

    frame += 1
    if (frame < maxFrames) requestAnimationFrame(applyWhenReady)
  }

  requestAnimationFrame(applyWhenReady)
}
