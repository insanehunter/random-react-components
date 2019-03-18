import LocalizedStrings from 'react-localization'
import en from './en'
import ru from './ru'

import getNextInArray from '../../helpers/getNextInArray'
import getStorageDriver from '../../helpers/getStorageDriver'

class MemoizedLocalizedStrings extends LocalizedStrings {
  constructor(strings) {
    super(strings)
    this._storage = getStorageDriver('language')
    this.language = this._storage.value
  }

  get availableLanguages() {
    return super.getAvailableLanguages()
  }

  get currentLanguage() {
    return super.getLanguage()
  }

  get nextLanguage() {
    const currentLanguage = super.getLanguage()
    const availableLanguages = super.getAvailableLanguages()
    return getNextInArray(availableLanguages, currentLanguage)
  }

  set language(preferredLanguage) {
    const deviceLanguage = super.getInterfaceLanguage()
    const availableLanguages = super.getAvailableLanguages()
    const language = availableLanguages.includes(preferredLanguage) ? preferredLanguage : deviceLanguage
    this._storage.value = language
    super.setLanguage(language)
  }
}

export default new MemoizedLocalizedStrings({ en, ru })
