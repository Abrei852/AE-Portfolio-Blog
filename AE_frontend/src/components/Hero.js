import React from "react"
import Image from "gatsby-image"
import { FaHeart } from "react-icons/fa"
import Title from "./Title"
import { HeroWrapper, Div, Article, H2, P } from "../elements"
import { Button } from "../components/Button"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
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
      <Div>
        <Article>
          <H2>Systemutvecklare .Net</H2>
             <FaHeart size={15} color="purple" /> 
             {" "}
            | <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/intro-to-csharp/"
            >
              C#
            </a> |

            {" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org/docs/getting-started.html"
            >
              React
            </a> |
            {" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.gatsbyjs.org/docs/"
            >
              Gatsby
            </a> |
            
            {" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://styled-components.com/docs"
            >
              Styled Components
            </a> |

            {" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dotnet.microsoft.com/apps/xamarin"
            >
              Xamarin
            </a> | <br/>

            <P>
              - I’m currently working on my own xamarin app<br/> 
              - I’m currently learning React, Gatsby, GraphQL <br/>
              - I’m looking for help with anything frontend <br/>
              - Ask me about Rhodesian Ridgebacks <br/>
              - Pronouns: Inquisitive, break the mold..<br/>
              - I’m looking for help with anything frontend <br/>
              - I’m looking for help with anything frontend <br/>
            </P>
          <Button href="contact/">Kontakta mig</Button>
          <SocialLinks />
        </Article>
        <Image fluid={fluid} className="hero-img" />
      </Div>
    </HeroWrapper>
  )
}

export default Hero
