import React from "react"
import Title from "./Title"
import { Section, Div, Article } from "../elements/ServicesElements"
import { Underline } from "../elements/SpecialElements"
import services from "../constants/services"
const Services = () => {
  return (
    <Section>
      <Title title="Tjänster" />
      <Div >
        {services.map(service => {
          //  destructure
          const { id, icon, title, text } = service

          return (
            <Article key={id} >
              {icon}
              <h4>{title}</h4>
              <Underline/>
              <p>{text}</p>
            </Article>
          )
        })}
      </Div>
    </Section>
  )
}

export default Services
