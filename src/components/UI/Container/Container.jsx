import "./Container.css"
import PropTypes from "prop-types"

export const Container = ({ children }) => {
  return <main className="container">{children}</main>
}

Container.propTypes = {
  children: PropTypes.node
}
