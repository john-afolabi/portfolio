import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectSection from "components/ProjectSection"

const IndexPage = () => (
  <Layout>
    <SEO title=" " />
    <h2>Hi people</h2>
    <p>
      I am John, a Software Engineer obsessed about tech generally and how
      things work....
    </p>
    <hr />
    <h2>Projects</h2>
    <hr />
    <ProjectSection />
  </Layout>
)

export default IndexPage
