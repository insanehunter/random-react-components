import LocalizedStrings from 'react-localization'
import en from './en'
import ru from './ru'

class MemoizedLocalizedStrings extends LocalizedStrings {
  storageKey = 'language'

  constructor(strings) {
    super(strings)
    this._restore()
  }

  get availableLanguages() {
    return super.getAvailableLanguages()
  }

  get currentLanguage() {
    return super.getLanguage()
  }

  set language(preferredLanguage) {
    const deviceLanguage = super.getInterfaceLanguage()
    const availableLanguages = super.getAvailableLanguages()
    const language = availableLanguages.includes(preferredLanguage) ? preferredLanguage : deviceLanguage
    super.setLanguage(language)
    this._save(language)
  }

  _restore() {
    this.language = localStorage.getItem(this.storageKey)
  }

  _save(selectedLanguage) {
    localStorage.setItem(this.storageKey, selectedLanguage)
  }
}

export default new MemoizedLocalizedStrings({ en, ru })
