import React from "react"
import Image from "gatsby-image"
import { FaHeart } from "react-icons/fa"
import { HeroWrapper, Div, Article } from "../elements"
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
          <ul>

            <li>
              <h1>Abraham Eishow</h1>
            </li>
            

            <li>
              - <FaHeart size={13} /> {" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/intro-to-csharp/"
            >
              C#
            </a>,
            {" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org/docs/getting-started.html"
            >
              React
            </a>
            </li>

          </ul>

            <div className="underline"></div>
            <h4>Systemutvecklare .Net</h4>
            - 🔭 I’m currently working on my own Portfolio site
            <br />
            - 🌱 I’m currently learning React, Gatsby, GraphQL and Strapi
            <br />
            - 🤔 I’m looking for help with anything frontend 
            <br />
            - 💬 Ask me about Rhodesian Ridgebacks
            <br />
            - 😄 Pronouns: Inquisitive, break the mold.. <br />- 💜{" "}

            ,{" "}

            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.gatsbyjs.org/docs/"
            >
              Gatsby
            </a>{" "}
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://styled-components.com/docs"
            >
              Styled Components
            </a>
            <br />
            - ⚡ Fun fact: I used to fly planes
            <br />
            - 📫 How to reach me: use the link below
            <br />
            <Link to="/contact" className="btn">
              kontakta mig
            </Link>
            <SocialLinks />
        </Article>
        <Image fluid={fluid} />
      </Div>
    </HeroWrapper>
  )
}

export default Hero
