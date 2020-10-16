import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { AboutWrapper, AboutInfoWrapper } from "../elements/PageElements"
import SEO from "../components/SEO"
import downloadFile from "../../static/AECV.pdf"

const About = () => {
  return (
    <Layout>
      <SEO title="CV" description="Abrahams CV" />
      <AboutWrapper>
        <AboutInfoWrapper>
          <article className="about-text">
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
        </AboutInfoWrapper>
        <></>
      </AboutWrapper>
    </Layout>
  )
}


export default About
