import { useContext } from 'react'
import PropTypes from 'prop-types'
import LocalizationContext from '../contexts/LocalizationContext'

const Localizer = ({ stringPath, render }) => {
  const { getlocalizedStringAtPath } = useContext(LocalizationContext)
  const localizedString = getlocalizedStringAtPath(stringPath)

  return (
    render && render instanceof Function
      ? render(localizedString)
      : localizedString
  )
}

Localizer.propTypes = {
  children: PropTypes.node,
  render: PropTypes.func
}

export default Localizer
