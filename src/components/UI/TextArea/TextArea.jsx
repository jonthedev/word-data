import "./TextArea.css"
import { useState } from "react"
import { Warning } from "../../Typography/Warning/Warning"
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS
} from "../../../lib/constants"
import PropTypes from "prop-types"

export const TextArea = ({ setStats }) => {
  const [text, setText] = useState("")
  const [warning, setWarning] = useState("")

  const handleChange = (e) => {
    let text = e.target.value

    if (text.includes("<script>")) {
      setWarning("You can't use <script> in your text.")
      text = text.replace("<script>", "")
    } else {
      setWarning("")
    }

    setText(text)

    setStats({
      numberOfWords: text.split(" ")[0] === "" ? 0 : text.split(" ").length,
      numberOfCharacters: text.length,
      instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
      facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length
    })
  }

  return (
    <section className="textarea">
      <textarea
        spellCheck="false"
        placeholder="Enter your text"
        onChange={handleChange}
        value={text}
      ></textarea>

      <Warning warningText={warning} />
    </section>
  )
}

TextArea.propTypes = {
  setStats: PropTypes.func
}
