import { useContext } from 'react'
import PropTypes from 'prop-types'
import LocalizationContext from '../contexts/LocalizationContext'

const Localized = ({ string, render }) => {
  const { localizeString } = useContext(LocalizationContext)
  const localizedString = localizeString(string)

  return (
    render && render instanceof Function
      ? render(localizedString)
      : localizedString
  )
}

Localized.propTypes = {
  children: PropTypes.node,
  render: PropTypes.func
}

export default Localized
