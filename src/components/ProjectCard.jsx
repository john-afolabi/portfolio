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
const CardImageContainer = styled("div")`
  background: ${colors.grey200};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  padding-left: 2em;
  padding-right: 2em;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${colors.blue500};
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }

  img {
    max-width: 400px;
    width: 100%;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      max-width: 300px;
    }
  }
`

const ProjectCard = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ja-logo.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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
            <CardImageContainer>
              <Img fixed={data.placeholderImage.childImageSharp.fixed} />
            </CardImageContainer>
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
