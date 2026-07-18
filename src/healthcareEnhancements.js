import './healthcareEnhancements.css'

const copy = {
  es: {
    nav: 'Para organizaciones',
    cta: 'Necesito cubrir vacantes',
    kicker: 'Para hospitales, clínicas y centros sociosanitarios',
    title: 'Cubra vacantes sanitarias con evidencia, no solo con currículums.',
    text: 'Defina la especialidad, el turno, la ubicación y el estado de reconocimiento exigido. HSE.onl prepara casos breves vinculados al puesto y organiza candidatos locales, de la UE y de Latinoamérica que ya pueden ejercer en España.',
    steps: [
      ['01', 'Describa la vacante', 'Especialidad, experiencia, competencias clínicas, idioma, colegiación y disponibilidad.'],
      ['02', 'Invite talento elegible', 'Filtre por titulación reconocida, especialidad, territorio y movilidad antes de entrevistar.'],
      ['03', 'Compare habilidades aplicadas', 'Revise respuestas a situaciones del puesto y llegue a la entrevista con mejores señales.'],
    ],
    action: 'Solicitar un piloto',
    note: 'HSE.onl complementa —no sustituye— la verificación de identidad, titulación, colegiación, derecho al ejercicio y evaluación clínica del empleador.',
    subject: 'Piloto de contratación sanitaria con HSE.onl',
  },
  en: {
    nav: 'For employers',
    cta: 'I need to fill roles',
    kicker: 'For hospitals, clinics and care providers',
    title: 'Fill healthcare roles with evidence, not CVs alone.',
    text: 'Define the specialty, shift, location and required recognition status. HSE.onl prepares short job-relevant cases and organises local, EU and Latin American candidates who are already eligible to practise in Spain.',
    steps: [
      ['01', 'Describe the role', 'Specialty, experience, clinical competencies, language, registration and availability.'],
      ['02', 'Invite eligible talent', 'Filter by recognised qualification, specialty, location and mobility before interviewing.'],
      ['03', 'Compare applied skills', 'Review answers to role-specific situations and enter interviews with stronger signals.'],
    ],
    action: 'Request a pilot',
    note: 'HSE.onl complements—rather than replaces—employer checks of identity, qualifications, professional registration, right to practise and clinical competence.',
    subject: 'Healthcare hiring pilot with HSE.onl',
  },
  it: {
    nav: 'Per le organizzazioni',
    cta: 'Devo coprire posizioni',
    kicker: 'Per ospedali, cliniche e strutture sociosanitarie',
    title: 'Coprite le posizioni sanitarie con evidenze, non soltanto con CV.',
    text: 'Definite specialità, turno, sede e stato di riconoscimento richiesto. HSE.onl prepara brevi casi collegati al ruolo e organizza candidati locali, UE e latinoamericani già abilitati a esercitare in Spagna.',
    steps: [
      ['01', 'Descrivete la posizione', 'Specialità, esperienza, competenze cliniche, lingua, iscrizione e disponibilità.'],
      ['02', 'Invitate talenti idonei', 'Filtrate per titolo riconosciuto, specialità, territorio e mobilità prima del colloquio.'],
      ['03', 'Confrontate competenze applicate', 'Valutate risposte a situazioni del ruolo e arrivate al colloquio con segnali migliori.'],
    ],
    action: 'Richiedi un progetto pilota',
    note: 'HSE.onl integra, ma non sostituisce, le verifiche del datore di lavoro su identità, titoli, iscrizione professionale, diritto all’esercizio e competenza clinica.',
    subject: 'Progetto pilota di recruiting sanitario con HSE.onl',
  },
  ru: {
    nav: 'Для организаций',
    cta: 'Нужно закрыть вакансии',
    kicker: 'Для больниц, клиник и организаций ухода',
    title: 'Закрывайте медицинские вакансии по подтверждённым навыкам, а не только по резюме.',
    text: 'Укажите специальность, смену, регион и требуемый статус признания квалификации. HSE.onl формирует короткие задания по роли и организует кандидатов из Испании, ЕС и Латинской Америки, уже имеющих право работать по профессии в Испании.',
    steps: [
      ['01', 'Опишите вакансию', 'Специальность, опыт, клинические компетенции, язык, регистрация и доступность.'],
      ['02', 'Пригласите подходящих специалистов', 'Фильтруйте по признанной квалификации, специальности, региону и готовности к переезду.'],
      ['03', 'Сравните прикладные навыки', 'Изучите ответы на рабочие ситуации и проводите интервью с более сильными сигналами.'],
    ],
    action: 'Запросить пилот',
    note: 'HSE.onl дополняет, но не заменяет проверку личности, дипломов, профессиональной регистрации, права на практику и клинической компетентности работодателем.',
    subject: 'Пилот по найму медицинских специалистов с HSE.onl',
  },
}

function getLocale() {
  const locale = document.documentElement.lang?.toLowerCase().split('-')[0]
  return copy[locale] ? locale : 'es'
}

function createEmployerSection() {
  const section = document.createElement('section')
  section.className = 'section healthcare-employer-section'
  section.id = 'empleadores'
  section.dataset.healthcareEmployer = 'true'
  section.innerHTML = `
    <div class="healthcare-employer-copy">
      <p class="section-kicker" data-healthcare="kicker"></p>
      <h2 data-healthcare="title"></h2>
      <p data-healthcare="text"></p>
      <a class="button button-primary healthcare-pilot-button" data-healthcare="action"></a>
      <p class="healthcare-employer-note" data-healthcare="note"></p>
    </div>
    <div class="healthcare-employer-steps" data-healthcare="steps"></div>
  `
  return section
}

function renderEnhancements() {
  const locale = getLocale()
  const t = copy[locale]

  const avatarLabels = ['MIR', 'EIR', 'FIS', '+2k']
  document.querySelectorAll('.hero-proof .avatar-stack span').forEach((item, index) => {
    if (avatarLabels[index]) item.textContent = avatarLabels[index]
  })

  const floatingIcon = document.querySelector('.floating-card-top .floating-icon')
  if (floatingIcon) floatingIcon.textContent = 'COL'

  const heroActions = document.querySelector('.hero-actions')
  if (heroActions) {
    let employerCta = heroActions.querySelector('[data-healthcare-cta]')
    if (!employerCta) {
      employerCta = document.createElement('a')
      employerCta.className = 'button button-primary healthcare-employer-cta'
      employerCta.dataset.healthcareCta = 'true'
      heroActions.append(employerCta)
    }
    employerCta.textContent = `${t.cta} →`
    employerCta.href = '#empleadores'
  }

  const nav = document.querySelector('.nav-links')
  if (nav) {
    let employerLink = nav.querySelector('[data-healthcare-nav]')
    if (!employerLink) {
      employerLink = document.createElement('a')
      employerLink.dataset.healthcareNav = 'true'
      employerLink.href = '#empleadores'
      nav.append(employerLink)
    }
    employerLink.textContent = t.nav
  }

  let section = document.querySelector('[data-healthcare-employer]')
  if (!section) {
    const trustStrip = document.querySelector('.trust-strip')
    if (trustStrip) {
      section = createEmployerSection()
      trustStrip.insertAdjacentElement('afterend', section)
    }
  }

  if (!section) return

  section.querySelector('[data-healthcare="kicker"]').textContent = t.kicker
  section.querySelector('[data-healthcare="title"]').textContent = t.title
  section.querySelector('[data-healthcare="text"]').textContent = t.text
  section.querySelector('[data-healthcare="note"]').textContent = t.note

  const action = section.querySelector('[data-healthcare="action"]')
  action.textContent = `${t.action} →`
  action.href = `mailto:hola@hse.onl?subject=${encodeURIComponent(t.subject)}`

  const steps = section.querySelector('[data-healthcare="steps"]')
  steps.replaceChildren(...t.steps.map(([number, title, text]) => {
    const article = document.createElement('article')
    article.className = 'healthcare-employer-step'
    article.innerHTML = `
      <span>${number}</span>
      <div><h3></h3><p></p></div>
    `
    article.querySelector('h3').textContent = title
    article.querySelector('p').textContent = text
    return article
  }))
}

export function applyHealthcareEnhancements() {
  let attempts = 0
  const mount = () => {
    if (document.querySelector('.hero-actions') && document.querySelector('.trust-strip')) {
      renderEnhancements()
      return
    }
    attempts += 1
    if (attempts < 120) requestAnimationFrame(mount)
  }

  requestAnimationFrame(mount)

  const observer = new MutationObserver(() => renderEnhancements())
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] })
}
