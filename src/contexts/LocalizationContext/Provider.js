import React, { useState } from 'react'
import LocalizationContext from './Context'
import l10n from '../../services/localization'
import getObjectValueAtPath from '../../helpers/getObjectValueAtPath'

const LocalizationProvider = ({ children }) => {
  const [currentLanguage, setLanguage] = useState(l10n.currentLanguage)

  const nextLanguage = (() => {
    const availableLanguages = l10n.availableLanguages
    const currentLanguageIndex = availableLanguages.indexOf(currentLanguage)
    const nextLanguageIndex = availableLanguages.length > currentLanguageIndex + 1 ? currentLanguageIndex + 1 : 0
    return availableLanguages[nextLanguageIndex]
  })()

  function toggleLanguage() {
    l10n.language = nextLanguage
    setLanguage(nextLanguage)
  }

  function localizeString(stringPath) {
    return getObjectValueAtPath(l10n, stringPath)
  }

  return (
    <LocalizationContext.Provider value={{ nextLanguage, toggleLanguage, localizeString }}>
      {children}
    </LocalizationContext.Provider>
  )
}

export default LocalizationProvider