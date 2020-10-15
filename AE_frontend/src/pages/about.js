import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import downloadFile from "../../static/AECV.pdf"
// ...GatsbyImageSharpFluid
const About = () => {
  //console.log(nodes)
  return (
    <Layout>
      <SEO title="CV" description="Abrahams CV" />
      <section className="about-page">
        <div className="section-center about-center">
          <article className="about-text">
            {/* <Title title={title} />
                <p>{info}</p> */}


            <div className="btn cv">
              <a href={downloadFile} download>
                Ladda ner fullständig CV
              </a>
              {` `}
            </div>
            <Link to="/contact" className="btn">
              kontakta mig
            </Link>
          </article>
        </div>
        <></>
      </section>
    </Layout>
  )
}


export default About
