import "./Stats.css"
import PropTypes from "prop-types"
import { Title } from "../../Typography/Title/Title"

export const Stats = ({ stats }) => {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} type="Words" />
      <Stat number={stats.numberOfCharacters} type="Characters" />
      <Stat number={stats.instagramCharactersLeft} type="Instagram" />
      <Stat number={stats.facebookCharactersLeft} type="Facebook" />
    </section>
  )
}

Stats.propTypes = {
  stats: PropTypes.shape({
    numberOfWords: PropTypes.number,
    numberOfCharacters: PropTypes.number,
    instagramCharactersLeft: PropTypes.number,
    facebookCharactersLeft: PropTypes.number
  })
}

function Stat({ number, type }) {
  console.log()
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>

      <Title className="second-heading" title={type} />
    </section>
  )
}

Stat.propTypes = {
  number: PropTypes.number,
  type: PropTypes.string
}
