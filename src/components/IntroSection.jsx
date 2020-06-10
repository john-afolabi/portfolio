import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Main = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    flex-direction: column;
    align-items: flex-start;
  }

  div:last-child {
    p {
      line-height: 1;
      a {
        text-decoration: none;
        font-weight: 700;
        color: white;
        background-color: ${colors.blue700};
        padding: 0.2em;

        &:hover {
          background-color: ${colors.blue900};
        }
      }
    }
  }
`

const IntroText = styled("div")`
  max-width: 80%;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    max-width: 70%;
  }
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    max-width: 100%;
  }

  p {
    span {
      font-weight: 700;
      color: ${colors.blue700};
    }
  }
`

const IntroSection = () => (
  <>
    <Main>
      <IntroText>
        <hr />
        <p>
          Hi ___ I am John Afolabi a <span>Sofware Engineer</span> based in{" "}
          <span>Lagos, Nigeria.</span> I have always been obessed about tech and
          how things work on a fundamental level which led me to{" "}
          <span>writing code</span>. I enjoy building stuff that works on my
          free time. Feel free to reach out!
        </p>
      </IntroText>
      <div>
        <hr />
        <p>
          <FontAwesomeIcon icon={faTwitter} />{" "}
          <a href="https://twitter.com/_john_afolabi">Twitter</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faLinkedin} />{" "}
          <a href="https://www.linkedin.com/in/john-afolabi/">LinkedIn</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faGithub} />{" "}
          <a href="https://github.com/john-afolabi">Github</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          <a href="mailto:johnafolabi.da@gmail.com?subject=Hi%20John">Email</a>
        </p>
      </div>
    </Main>
    <hr />
  </>
)

export default IntroSection
