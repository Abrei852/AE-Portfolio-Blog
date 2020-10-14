import React from "react"
import Title from "./Title"
import { Button } from "./Button"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Button href="projects/"> Alla projekt</Button>
      )}
    </section>
  )
}

export default Projects
