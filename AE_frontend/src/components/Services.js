import React from "react"
import Title from "./Title"
import { Section } from "../elements/ServicesElements"
import services from "../constants/services"
const Services = () => {
  return (
    <Section>
      <Title title="Tjänster" />
      <div className="section-center services-center">
        {services.map(service => {
          //  destructure
          const { id, icon, title, text } = service

          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

export default Services
