import React from 'react'
import styled from 'styled-components'
import { LinkHoverStyled } from './styled/LinkStyled'

const HeaderStyled = styled.header`
  padding: 1.45rem 1rem 1rem;
  border-bottom: 3px solid ${({ theme }) => theme.border};
  transition: all 0.25s linear;
`

const Header = () => (
  <HeaderStyled>
    <h1>
      <LinkHoverStyled to="/">/lab/</LinkHoverStyled>
    </h1>
  </HeaderStyled>
)

export default Header
