import PropTypes from 'prop-types'

const VisibilityManager = ({ children, visible = true, hidden = false }) => {
  return hidden ? null : visible ? children : null
}

VisibilityManager.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  hidden: PropTypes.bool
}

export default VisibilityManager
