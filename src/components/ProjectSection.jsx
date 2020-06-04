import React from "react"
import styled from "@emotion/styled"
import ProjectCard from "components/ProjectCard"
import dimensions from "styles/dimensions"

const ProjectCardContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 4em;
  transition: all 150ms ease-in-out;
  text-decoration: none;
  color: currentColor;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    flex-direction: column;
  }
`
const ProjectSection = () => (
  <ProjectCardContainer>
    <ProjectCard />
  </ProjectCardContainer>
)

export default ProjectSection
