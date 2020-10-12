import React from "react"
import { JobWrapper } from "../elements/JobElements"
import { H3, H4, P} from "../elements/TypographyElements"

export const Job = ({position, company, desc, date}) => {
    console.log(date);
    return(
        <JobWrapper>
            <H3>{position}</H3>
            <H4>{company}</H4>
            <P>{date}</P>
            {desc.map(item => {
                return(
                    <div key={item.id}>
                    <p>{item.name}</p>
                </div>
                )
            })}
        </JobWrapper>
    )
}
