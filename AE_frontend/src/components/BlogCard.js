import React from "react"
import { BlogCardWrapper } from "../elements/BlogCardElements"
import { H4, P } from "../elements/TypographyElements"

export const BlogCard = ({title, desc, category, date}) => {
    return(
        <BlogCardWrapper>
            <H4 transform="uc" align="center" fontsize="small">{title}</H4>
            <P fontsize="xsmall" align="center">{desc}</P>
            <div>
                <P transform="uc" fontsize="xsmall" align="center">{category}</P>
                <P fontsize="xsmall" align="center">{date}</P>
            </div>
        </BlogCardWrapper>
    )
}