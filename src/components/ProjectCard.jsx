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
  faYarn,
  faSass,
  faJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
  justify-content: space-evenly;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    flex-direction: column;
  }
`
const Icons = styled(FontAwesomeIcon)`
  color: ${colors.blue400};
  font-size: 3em;
  padding-right: 0.5em;
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
  return (
    <>
      <Card>
        <CardImageContainer>
          <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        </CardImageContainer>
        <CardContent>
          <Title>My first project</Title>
          <Links>
            <a href="https://google.com">Hosted Application</a>
            <a href="https://google.com">Backend Github</a>
            <a href="https://google.com">FrontEnd Github</a>
          </Links>

          <Icons icon={faReact} />
          <Icons icon={faNode} />
          <Icons icon={faHtml5} />
          <Icons icon={faCss3} />
          <Icons icon={faYarn} />
          <Icons icon={faSass} />
          <Icons icon={faJs} />
          <Icons icon={faPython} />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            pellentesque nisi. In finibus, mi ut congue tincidunt, purus
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardImageContainer>
          <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        </CardImageContainer>
        <CardContent>
          <Title>My first project</Title>
          <Links>
            <a href="https://google.com">Hosted Application</a>
            <a href="https://google.com">Backend Github</a>
            <a href="https://google.com">FrontEnd Github</a>
          </Links>

          <Icons icon={faReact} />
          <Icons icon={faNode} />
          <Icons icon={faHtml5} />
          <Icons icon={faCss3} />
          <Icons icon={faYarn} />
          <Icons icon={faSass} />
          <Icons icon={faJs} />
          <Icons icon={faPython} />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            pellentesque nisi. In finibus, mi ut congue tincidunt, purus
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardImageContainer>
          <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        </CardImageContainer>
        <CardContent>
          <Title>My first project</Title>
          <Links>
            <a href="https://google.com">Hosted Application</a>
            <a href="https://google.com">Backend Github</a>
            <a href="https://google.com">FrontEnd Github</a>
          </Links>

          <Icons icon={faReact} />
          <Icons icon={faNode} />
          <Icons icon={faHtml5} />
          <Icons icon={faCss3} />
          <Icons icon={faYarn} />
          <Icons icon={faSass} />
          <Icons icon={faJs} />
          <Icons icon={faPython} />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            pellentesque nisi. In finibus, mi ut congue tincidunt, purus
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardImageContainer>
          <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        </CardImageContainer>
        <CardContent>
          <Title>My first project</Title>
          <Links>
            <a href="https://google.com">Hosted Application</a>
            <a href="https://google.com">Backend Github</a>
            <a href="https://google.com">FrontEnd Github</a>
          </Links>

          <Icons icon={faReact} />
          <Icons icon={faNode} />
          <Icons icon={faHtml5} />
          <Icons icon={faCss3} />
          <Icons icon={faYarn} />
          <Icons icon={faSass} />
          <Icons icon={faJs} />
          <Icons icon={faPython} />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            pellentesque nisi. In finibus, mi ut congue tincidunt, purus
          </p>
        </CardContent>
      </Card>
    </>
  )
}

export default ProjectCard
