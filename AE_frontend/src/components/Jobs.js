import React from "react"
import Title from "./Title"
import { JobsWrapper, Div , ButtonWrapper } from "../elements/JobsElements"
import { Job } from "./Job"
import { Button } from "./Button"
import { graphql, useStaticQuery } from "gatsby"

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
      <Div>
        {/* btn container */}
        <ButtonWrapper>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                onClick={() => setValue(index)}
                active={ index === value.toString() ? "true" : "false" }
              >
                {item.company}
              </button>
            )
          })}
        </ButtonWrapper>
        {/* job info */}
          <Job date = {date} position={position} company={company} desc={desc}/>
      </Div>
      <Button>Mitt CV</Button>
    </JobsWrapper>
  )
}

export default Jobs
