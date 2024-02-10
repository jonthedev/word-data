import "./Title.css"
import PropTypes from "prop-types"

export const Title = ({ size, title }) => {
  if (size === "h1") {
    return (
      <h1 className="first-heading">
        Word <span className="first-heading--thin">Data</span>
      </h1>
    )
  }

  return <h2 className="second-heading">{title}</h2>
}

Title.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string
}
