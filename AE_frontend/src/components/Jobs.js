import React from "react"
import Title from "./Title"
import { JobsWrapper,JobsCenter, ButtonWrapper } from "../elements/JobsElements"
import { Button } from "./Button"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  console.log(data)
  // destructering
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  console.log(jobs)
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  console.log(company, position, date, desc)

  return (
    <JobsWrapper>
      <Title title="erfarenhet" />
      <JobsCenter>
        {/* btn container */}
        <ButtonWrapper>

          {jobs.map((item, index) => {

            return (
              <button
                key={item.strapiId}
                onClick={() => setValue(index)}
                // className={` ${index === value && "active-btn"}`}
                active={ index === value }

              >
                {item.company}
              </button>

            )
          })}
        </ButtonWrapper>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </JobsCenter>
      <Button>Mitt CV</Button>
    </JobsWrapper>
  )
}

export default Jobs
