import React from "react"
import { Div } from "../elements/TitleElements"
import { Underline } from "../elements/SpecialElements"

const Title = ({ title }) => {
  return (
    <Div>
      <h2>{title || "default title"}</h2>
      <Underline/>
    </Div>
  )
}

export default Title