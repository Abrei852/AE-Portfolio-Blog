import React from "react"
import Title from "./Title"
import { Section, Div } from "../elements/ServicesElements"
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
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <Underline/>
              <p>{text}</p>
            </article>
          )
        })}
      </Div>
    </Section>
  )
}

export default Services
