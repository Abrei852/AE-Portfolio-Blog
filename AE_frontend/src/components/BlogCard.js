import React from "react"
import { BlogCardWrapper, Div } from "../elements/BlogCardElements"
import { H4, P } from "../elements/TypographyElements"

export const BlogCard = ({title, desc, category, date}) => {
    return(
        <BlogCardWrapper>
            <H4 transform="uc" align="center">{title}</H4>
            <P>{desc}</P>
            <Div>
                <P transform="uc">{category}</P>
                <P>{date}</P>
            </Div>
        </BlogCardWrapper>
    )
}