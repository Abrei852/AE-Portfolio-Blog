import React from "react"
import Image from "gatsby-image"
import { FaHeart } from "react-icons/fa"
import Title from "./Title"
import { HeroWrapper, Div, Article, H2, P } from "../elements"
import { Button } from "../components/Button"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { HeroCard } from "./HeroCard"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // console.log(data)

  return (
    <HeroWrapper>
      <Title title="Abraham Eishow"/>
      <HeroCard/>
      <Div>
        <Article>

          <Button href="contact/">Kontakta mig</Button>
          <SocialLinks />
        </Article>
        <Image fluid={fluid}/>
      </Div>
    </HeroWrapper>


  )
}

export default Hero
