import React from "react"
import Image from "gatsby-image"
import { FaHeart } from "react-icons/fa"
import { HeroWrapper, Div, Article, H1, H2 } from "../elements"
import { Button } from "../components"
import { Link } from "gatsby"
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
      <Div>
        <Article>

        <H1>Abraham Eishow</H1>

        <H2>Systemutvecklare .Net</H2>
          <ul>

            <li>
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
            </a> |
            </li>

            <li>
            - 🔭 I’m currently working on my own Portfolio site
            </li>

            <li>
            - 🌱 I’m currently learning React, Gatsby, GraphQL
            </li>

            <li>
            - 🤔 I’m looking for help with anything frontend 
            </li>

            <li>
            - 💬 Ask me about Rhodesian Ridgebacks
            </li>

            <li>
            - 😄 Pronouns: Inquisitive, break the mold..
            </li>

            <li>
            - ⚡ Fun fact: I used to fly planes
            </li>

            <li>
            - 📫 How to reach me: use the link below
            </li>
          </ul>
          <Button href="/contact/">Kontakta mig</Button>
          <SocialLinks />
        </Article>

      </Div>
    </HeroWrapper>
  )
}

export default Hero
