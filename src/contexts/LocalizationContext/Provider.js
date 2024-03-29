import React, { useState } from 'react'
import PropTypes from 'prop-types'
import LocalizationContext from './Context'
import l10n from '../../services/localization'
import getObjectValueAtPath from '../../helpers/getObjectValueAtPath'

const LocalizationProvider = ({ children }) => {
  const [, setLanguage] = useState(l10n.currentLanguage)
  const nextLanguage = l10n.nextLanguage

  function switchLanguage() {
    l10n.language = nextLanguage
    setLanguage(nextLanguage)
  }

  function getlocalizedStringAtPath(path) {
    return getObjectValueAtPath(l10n, path)
  }

  return (
    <LocalizationContext.Provider value={{ nextLanguage, switchLanguage, getlocalizedStringAtPath }}>
      {children}
    </LocalizationContext.Provider>
  )
}

LocalizationProvider.propTypes = {
  children: PropTypes.node
}

export default LocalizationProvider
