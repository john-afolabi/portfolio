import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Logo from "images/ja-logo.png"

const HeaderContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
`

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;
`

const LogoIcon = styled("img")`
  max-width: 33px;
`

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <Link to="/">
        <LogoIcon src={Logo} />
      </Link>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
