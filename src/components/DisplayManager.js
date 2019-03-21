import PropTypes from 'prop-types'

const DisplayManager = ({ children, visible = true, hidden = false }) => {
  return hidden ? null : visible ? children : null
}

DisplayManager.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  hidden: PropTypes.bool
}

export default DisplayManager
