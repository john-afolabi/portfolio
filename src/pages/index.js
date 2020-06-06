import React from "react"

import Layout from "components/Layout"
import SEO from "components/SEO"
import IntroSection from "components/IntroSection"
import ProjectSection from "components/ProjectSection"

const IndexPage = () => (
  <Layout>
    <SEO title=" " />

    <IntroSection />
    <ProjectSection />
  </Layout>
)

export default IndexPage
