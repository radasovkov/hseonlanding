const localeOptions = [
  { code: 'es', label: 'ES — Español' },
  { code: 'en', label: 'EN — English' },
]

function mountLanguageSelect() {
  const switcher = document.querySelector('.language-switcher')

  if (!switcher) {
    requestAnimationFrame(mountLanguageSelect)
    return
  }

  if (switcher.querySelector('.language-select')) return

  const select = document.createElement('select')
  select.className = 'language-select'

  localeOptions.forEach(({ code, label }) => {
    const option = document.createElement('option')
    option.value = code
    option.textContent = label
    select.append(option)
  })

  const getButtons = () => Array.from(switcher.querySelectorAll('button'))

  const syncSelect = () => {
    const activeButton = getButtons().find((button) => button.classList.contains('active'))
    if (activeButton) select.value = activeButton.textContent.trim().toLowerCase()

    const ariaLabel = switcher.getAttribute('aria-label') || 'Language'
    if (select.getAttribute('aria-label') !== ariaLabel) {
      select.setAttribute('aria-label', ariaLabel)
    }
  }

  select.addEventListener('change', () => {
    const button = getButtons().find(
      (candidate) => candidate.textContent.trim().toLowerCase() === select.value,
    )

    if (button) button.click()

    requestAnimationFrame(() => {
      syncSelect()
      select.blur()
    })
  })

  switcher.append(select)
  syncSelect()

  const observer = new MutationObserver(() => {
    if (!switcher.contains(select)) switcher.append(select)
    syncSelect()
  })

  observer.observe(switcher, {
    attributes: true,
    attributeFilter: ['aria-label', 'class'],
    childList: true,
    subtree: true,
  })
}

export function applyLanguageSelect() {
  requestAnimationFrame(mountLanguageSelect)
}
