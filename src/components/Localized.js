import { useContext } from 'react'
import PropTypes from 'prop-types'
import LocalizationContext from '../contexts/LocalizationContext'

const Localized = ({ stringPath, render }) => {
  const { getlocalizedStringAtPath } = useContext(LocalizationContext)
  const localizedString = getlocalizedStringAtPath(stringPath)

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
