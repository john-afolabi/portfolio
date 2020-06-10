import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

const HeaderContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
`

const Header = () => {
  return <HeaderContainer></HeaderContainer>
}

export default Header
