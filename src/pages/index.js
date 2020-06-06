import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
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
