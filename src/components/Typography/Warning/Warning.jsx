import "./Warning.css"
import PropTypes from "prop-types"

export const Warning = ({ warning }) => {
  return <p className="warning">{warning}</p>
}

Warning.propTypes = {
  warning: PropTypes.string
}
