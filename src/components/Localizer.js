import { useContext } from 'react'
import PropTypes from 'prop-types'
import LocalizationContext from '../contexts/LocalizationContext'

const Localizer = ({ stringPath, children }) => {
  const { getlocalizedStringAtPath } = useContext(LocalizationContext)
  const localizedString = getlocalizedStringAtPath(stringPath)
  return children ? children(localizedString) : localizedString
}

Localizer.propTypes = {
  stringPath: PropTypes.string,
  children: PropTypes.func
}

export default Localizer
