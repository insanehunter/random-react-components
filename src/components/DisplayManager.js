import PropTypes from 'prop-types'

const DisplayManager = ({ visible, children }) => {
  return visible ? children : null
}

DisplayManager.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node
}

export default DisplayManager
