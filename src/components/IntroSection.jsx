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
`

const IntroSection = () => (
  <>
    <Main>
      <IntroText>
        <hr />
        {/* <h3>Hi _____</h3> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          pellentesque nisi. In finibus, mi ut congue tincidunt, purus erat
          rutrum tortor, sit amet porttitor felis felis sit amet nibh. Sed ac
          tempus justo. Praesent quis tellus leo. Donec ultrices mollis
          malesuada
        </p>
      </IntroText>
      <div>
        <hr />
        <p>
          <FontAwesomeIcon icon={faTwitter} />{" "}
          <a href="https://twitter.com/Janonymousone">Twitter</a>
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
  </>
)

export default IntroSection
