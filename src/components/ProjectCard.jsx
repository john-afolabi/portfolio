import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faReact,
  faNode,
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faPython,
  faLess,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { projects } from "projects"

const Card = styled("div")`
  max-height: 700px;
  max-width: 450px;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  margin-bottom: 2em;

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: all 150ms ease-in-out;

    div {
      div {
        opacity: 1;
        transition: all 150ms ease-in-out;
      }
    }
  }
`

const CardContent = styled("div")`
  padding: 1.25em 2.5em 2em 2.5em;
`
const Title = styled("h3")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`
const Links = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    flex-direction: column;
  }

  a {
    width: 30%;
    text-decoration: none;
    color: white;
    background-color: ${colors.blue700};
    padding: 0.2em;

    &:hover {
      background-color: ${colors.blue900};
    }
  }
`
const Icons = styled(FontAwesomeIcon)`
  color: ${colors.blue700};
  font-size: 5em;
  padding-right: 0.5em;

  &:hover {
    color: ${colors.blue900};
  }
`

const ProjectImage = styled(Img)`
  opacity: 0.5;
`
const ProjectImageContainer = styled("div")`
  background-color: ${colors.blue300};
`

const ProjectCard = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          extension: { regex: "/jpg/" }
          relativeDirectory: { eq: "projects" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                base64
                originalName
                aspectRatio
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  const images = []
  data.allFile.edges.forEach(node => {
    images.push(node.node.childImageSharp)
  })

  const stackToIcon = {
    react: faReact,
    node: faNode,
    html: faHtml5,
    css: faCss3,
    sass: faSass,
    js: faJs,
    python: faPython,
    less: faLess,
    sql: faDatabase,
    bootstrap: faBootstrap,
  }

  return (
    <>
      {projects.map(project => {
        return (
          <Card key={project.title}>
            <ProjectImageContainer>
              <ProjectImage
                fluid={
                  images.find(
                    image => image.fluid.originalName === project.image
                  ).fluid
                }
              />
            </ProjectImageContainer>
            <CardContent>
              <Title>{project.title}</Title>
              <Links>
                <p>
                  {project.links.hosted ? (
                    <a href={project.links.hosted}>
                      Hosted <br /> Application
                    </a>
                  ) : null}
                </p>
                <p>
                  {project.links.frontend ? (
                    <a href={project.links.frontend}>
                      Frontend <br /> Github
                    </a>
                  ) : null}
                </p>
                <p>
                  {project.links.backend ? (
                    <a href={project.links.backend}>
                      Backend <br /> Github
                    </a>
                  ) : null}
                </p>
              </Links>
              {project.stack.map(stack => {
                return <Icons icon={stackToIcon[stack]} />
              })}

              <p>{project.desc}</p>
            </CardContent>
          </Card>
        )
      })}
    </>
  )
}

export default ProjectCard
