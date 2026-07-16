import { useEffect, useState } from 'react'
import './App.css'
import './additions.css'
import './localization.css'
import { copy, localeOptions } from './translations.js'

const brandLinks = {
  email: 'hola@hse.onl',
  instagram: 'https://www.instagram.com/hse.onl/',
  appStore: 'https://apps.apple.com/es/search?term=HSE.onl',
}

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

function CommentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 9 9 0 0 1-3.8-.9L4 20l1.4-4A7.7 7.7 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" />
    </svg>
  )
}

function BranchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="6" cy="5" r="2" />
      <circle cx="18" cy="5" r="2" />
      <circle cx="18" cy="19" r="2" />
      <path d="M6 7v8a4 4 0 0 0 4 4h6M8 5h4a6 6 0 0 1 6 6v6" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.8 5.9a5.5 5.5 0 0 0-7.8 0L12 7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.3a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
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
    <div className={`phone-frame ${className}`} role="group" aria-label={label}>
      <div className="phone-speaker" />
      <div className="phone-screen">{children}</div>
      <div className="phone-home" />
    </div>
  )
}

function FeedHeader({ title, back = false, menuLabel }) {
  return (
    <div className="career-feed-header">
      <span className="feed-header-side">{back ? '‹' : <span className="brand-mark small">H</span>}</span>
      <strong>{title}</strong>
      <span className="feed-header-side feed-menu" aria-label={menuLabel}>•••</span>
    </div>
  )
}

function ActionBar({ counts, labels, className = '' }) {
  return (
    <div className={`post-action-row ${className}`}>
      <button className="post-action" type="button" aria-label={`${labels.comments}: ${counts.comments}`}>
        <CommentIcon />
        <span>{counts.comments}</span>
      </button>
      <button className="post-action" type="button" aria-label={`${labels.branches}: ${counts.branches}`}>
        <BranchIcon />
        <span>{counts.branches}</span>
      </button>
      <button className="post-action" type="button" aria-label={`${labels.likes}: ${counts.likes}`}>
        <HeartIcon />
        <span>{counts.likes}</span>
      </button>
      <button className="post-action post-action-save" type="button" aria-label={labels.save}>
        <StarIcon />
      </button>
    </div>
  )
}

function QuestionPost({ post, labels, accent = '' }) {
  return (
    <article className={`question-post ${accent}`}>
      <div className="question-post-author">
        <span className="mini-avatar ocean-mascot" aria-label={post.author}>{post.mascot}</span>
        <p>
          <strong>{post.author}</strong>
          <small>{post.role} · {post.time}</small>
        </p>
        <SparkIcon />
      </div>
      <h4>{post.question}</h4>
      {post.preview && <p className="answer-preview">{post.preview}</p>}
      <ActionBar counts={post.counts} labels={labels} className="question-post-actions" />
    </article>
  )
}

function ThreadAnswer({ answer, labels, alt = false }) {
  return (
    <div className="thread-answer">
      <div className="story-author">
        <span className={`mini-avatar ${alt ? 'alt' : ''}`}>{answer.initials}</span>
        <p><strong>{answer.name}</strong><small>{answer.role}</small></p>
      </div>
      <p>{answer.text}</p>
      <ActionBar counts={answer.counts} labels={labels} className="thread-meta" />
    </div>
  )
}

function AppStoreBadge({ text, compact = false }) {
  return (
    <a
      className={`official-store-badge ${compact ? 'compact-store-badge' : ''}`}
      href={brandLinks.appStore}
      target="_blank"
      rel="noreferrer"
      aria-label={text.aria}
    >
      <AppleIcon />
      <span>
        <small>{text.eyebrow}</small>
        <strong>App Store</strong>
      </span>
    </a>
  )
}

function LanguageSwitcher({ locale, onChange, label }) {
  return (
    <div className="language-switcher" role="group" aria-label={label}>
      {localeOptions.map((option) => (
        <button
          key={option.code}
          type="button"
          className={locale === option.code ? 'active' : ''}
          aria-pressed={locale === option.code}
          title={option.name}
          onClick={() => onChange(option.code)}
        >
          {option.short}
        </button>
      ))}
    </div>
  )
}

function getInitialLocale() {
  if (typeof window === 'undefined') return 'es'
  try {
    const stored = window.localStorage.getItem('hse-locale')
    if (stored && copy[stored]) return stored
  } catch {
    // Local storage can be unavailable in privacy-focused browser modes.
  }
  return 'es'
}

function App() {
  const [locale, setLocale] = useState(getInitialLocale)
  const t = copy[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t.meta.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', t.meta.description)
    try {
      window.localStorage.setItem('hse-locale', locale)
    } catch {
      // The language still changes even when persistence is unavailable.
    }
  }, [locale, t.meta.description, t.meta.title])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label={t.aria.home}>
          <span className="brand-mark">H</span>
          <span className="brand-word">HSE.onl</span>
        </a>
        <nav className="nav-links" aria-label={t.aria.nav}>
          <a href="#feed">{t.nav.feed}</a>
          <a href="#como-funciona">{t.nav.how}</a>
          <a href="#suscripcion">{t.nav.subscription}</a>
        </nav>
        <div className="header-actions">
          <LanguageSwitcher locale={locale} onChange={setLocale} label={t.aria.language} />
          <a className="nav-cta" href={brandLinks.appStore} target="_blank" rel="noreferrer">
            {t.nav.download}
            <ArrowIcon />
          </a>
        </div>
      </header>

      <main>
        <section className="hero section" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow">
              <SparkIcon />
              {t.hero.eyebrow}
            </div>
            <h1>{t.hero.title}</h1>
            <p className="hero-lede">{t.hero.lede}</p>
            <div className="hero-actions">
              <AppStoreBadge text={t.store} compact />
              <a className="button button-ghost" href="#feed">{t.hero.viewFeed}</a>
            </div>
            <div className="hero-proof" aria-label={t.aria.community}>
              <div className="avatar-stack" aria-hidden="true">
                <span>PM</span><span>UX</span><span>DS</span><span>+2k</span>
              </div>
              <p>
                <strong>{t.hero.proofTitle}</strong>
                <span>{t.hero.proofText}</span>
              </p>
            </div>
          </div>

          <div className="hero-visual" aria-label={t.aria.heroPreview}>
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <PhoneFrame label={t.aria.heroPreview} className="hero-phone feed-phone">
              <FeedHeader title={t.hero.feedHeader} menuLabel={t.aria.menu} />
              <div className="feed-tabs"><span className="active">{t.hero.tabs[0]}</span><span>{t.hero.tabs[1]}</span></div>
              <div className="career-feed-scroll">
                {t.hero.posts.map((post, index) => (
                  <QuestionPost key={post.question} post={post} labels={t.actions} accent={index === 0 ? 'featured-question' : ''} />
                ))}
              </div>
              <div className="feed-bottom-nav"><span>⌂</span><span>⌕</span><span className="feed-add">+</span><span>♧</span><span>○</span></div>
            </PhoneFrame>
            <div className="floating-card floating-card-top">
              <span className="floating-icon">CV</span>
              <p><strong>{t.hero.analyzedTitle}</strong><small>{t.hero.analyzedText}</small></p>
            </div>
            <div className="floating-card floating-card-bottom">
              <div className="mini-avatars" aria-hidden="true"><span>M</span><span>L</span><span>J</span></div>
              <p><strong>{t.hero.professionalsTitle}</strong><small>{t.hero.professionalsText}</small></p>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label={t.aria.principles}>
          {t.trust.map((item) => <span key={item}>{item}</span>)}
        </section>

        <section className="section experience-section" id="feed">
          <div className="section-heading centered-heading">
            <p className="section-kicker">{t.experience.kicker}</p>
            <h2>{t.experience.title}</h2>
            <p>{t.experience.text}</p>
          </div>

          <div className="screenshots-grid career-screenshots-grid">
            <article className="screenshot-card screenshot-feed">
              <div className="screenshot-copy">
                <span>{t.experience.cards[0].step}</span>
                <h3>{t.experience.cards[0].title}</h3>
                <p>{t.experience.cards[0].text}</p>
              </div>
              <PhoneFrame label={t.aria.heroPreview} className="feed-phone">
                <FeedHeader title={t.feedScreen.header} menuLabel={t.aria.menu} />
                <div className="feed-tabs"><span className="active">{t.feedScreen.tabs[0]}</span><span>{t.feedScreen.tabs[1]}</span></div>
                <div className="career-feed-scroll">
                  {t.feedScreen.posts.map((post, index) => (
                    <QuestionPost key={post.question} post={post} labels={t.actions} accent={index === 0 ? 'featured-question' : ''} />
                  ))}
                </div>
              </PhoneFrame>
            </article>

            <article className="screenshot-card screenshot-chat">
              <div className="screenshot-copy">
                <span>{t.experience.cards[1].step}</span>
                <h3>{t.experience.cards[1].title}</h3>
                <p>{t.experience.cards[1].text}</p>
              </div>
              <PhoneFrame label={t.threadScreen.header} className="thread-phone">
                <FeedHeader title={t.threadScreen.header} back menuLabel={t.aria.menu} />
                <div className="thread-question">
                  <span><SparkIcon /> {t.threadScreen.aiLabel}</span>
                  <h4>{t.threadScreen.question}</h4>
                </div>
                {t.threadScreen.answers.map((answer, index) => (
                  <ThreadAnswer key={answer.name} answer={answer} labels={t.actions} alt={index === 1} />
                ))}
                <button className="answer-question-button" type="button">{t.threadScreen.add}</button>
              </PhoneFrame>
            </article>

            <article className="screenshot-card screenshot-publish">
              <div className="screenshot-copy">
                <span>{t.experience.cards[2].step}</span>
                <h3>{t.experience.cards[2].title}</h3>
                <p>{t.experience.cards[2].text}</p>
              </div>
              <PhoneFrame label={t.publishScreen.header} className="answer-phone">
                <FeedHeader title={t.publishScreen.header} back menuLabel={t.aria.menu} />
                <div className="answer-context">
                  <span>{t.publishScreen.suggestion}</span>
                  <h4>{t.publishScreen.question}</h4>
                </div>
                <div className="answer-editor">
                  <p>{t.publishScreen.editor}</p>
                  <span className="editor-cursor" />
                </div>
                <div className="reflection-card">
                  <SparkIcon />
                  <p><strong>{t.publishScreen.reflectionTitle}</strong><small>{t.publishScreen.reflectionText}</small></p>
                </div>
                <div className="answer-tags">{t.publishScreen.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <button className="publish-button" type="button">{t.publishScreen.publish}</button>
              </PhoneFrame>
            </article>
          </div>
        </section>

        <section className="section how-section" id="como-funciona">
          <div className="section-heading">
            <p className="section-kicker">{t.how.kicker}</p>
            <h2>{t.how.title}</h2>
            <p>{t.how.text}</p>
          </div>
          <div className="benefits-grid">
            {t.how.benefits.map((benefit) => (
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
            {t.values.quotes.map((quote, index) => (
              <div className={`quote-card ${index === 0 ? 'quote-card-one' : 'quote-card-two'}`} key={quote.text}>
                <span className="quote-mark">“</span>
                <p>{quote.text}</p>
                <div><span className={`mini-avatar ${index === 1 ? 'alt' : ''}`}>{index === 0 ? 'LA' : 'DM'}</span><strong>{quote.person}</strong></div>
              </div>
            ))}
          </div>
          <div className="values-copy">
            <p className="section-kicker">{t.values.kicker}</p>
            <h2>{t.values.title}</h2>
            <p>{t.values.text}</p>
            <ul>
              {t.values.bullets.map((bullet) => (
                <li key={bullet.title}><CheckIcon /><span><strong>{bullet.title}</strong> {bullet.text}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section subscription-section" id="suscripcion">
          <div className="subscription-copy">
            <p className="section-kicker">{t.subscription.kicker}</p>
            <h2>{t.subscription.title}</h2>
            <p>{t.subscription.text}</p>
            <ul className="terms-list">
              {t.subscription.terms.map((term) => <li key={term}><CheckIcon />{term}</li>)}
            </ul>
            <p className="legal-note">{t.subscription.legal}</p>
          </div>
          <div className="plan-card">
            <div className="plan-badge">{t.subscription.badge}</div>
            <p className="plan-name">HSE.onl</p>
            <div className="plan-price"><strong>20 €</strong><span>{t.subscription.perMonth}</span></div>
            <div className="plan-divider" />
            <ul>
              {t.subscription.features.map((feature) => <li key={feature}><CheckIcon />{feature}</li>)}
            </ul>
            <AppStoreBadge text={t.store} />
            <small>{t.subscription.available}</small>
          </div>
        </section>

        <section className="download-section" id="descarga">
          <div className="download-glow" />
          <div className="download-content">
            <p className="section-kicker light-kicker">{t.download.kicker}</p>
            <h2>{t.download.title}</h2>
            <p>{t.download.text}</p>
            <div className="download-actions">
              <AppStoreBadge text={t.store} />
              <a className="contact-link" href={`mailto:${brandLinks.email}`}>
                {t.download.contact}
                <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="download-phone" aria-hidden="true">
            <PhoneFrame label={t.download.welcome}>
              <div className="welcome-screen">
                <span className="welcome-logo">H</span>
                <p>{t.download.welcome}</p>
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
            <p>{t.footer.description}</p>
          </div>
          <div className="footer-column">
            <strong>{t.footer.explore}</strong>
            <a href="#feed">{t.nav.feed}</a>
            <a href="#como-funciona">{t.nav.how}</a>
            <a href="#suscripcion">{t.nav.subscription}</a>
          </div>
          <div className="footer-column">
            <strong>{t.footer.contact}</strong>
            <a href={`mailto:${brandLinks.email}`}>{brandLinks.email}</a>
            <a href={brandLinks.instagram} target="_blank" rel="noreferrer" className="social-link"><InstagramIcon />Instagram</a>
            <a href={brandLinks.appStore} target="_blank" rel="noreferrer" className="social-link"><AppleIcon />App Store</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footer.rights}</span>
          <div><a href="#suscripcion">{t.footer.terms}</a><a href={`mailto:${brandLinks.email}?subject=${encodeURIComponent(t.footer.privacy)}%20HSE.onl`}>{t.footer.privacy}</a></div>
        </div>
      </footer>
    </div>
  )
}

export default App
