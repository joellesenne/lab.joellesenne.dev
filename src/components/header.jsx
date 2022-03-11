import React from 'react'
import styled from 'styled-components'
import {LinkHoverStyled} from './styled/LinkStyled'
import {header} from '../data'

const HeaderStyled = styled.header`
  padding: 1.45rem 1rem 1rem;
  border-bottom: 3px solid ${({ theme }) => theme.border};
  transition: all 0.25s linear;
`

const Header = () => (
  <HeaderStyled>
    <h1>
      <LinkHoverStyled to={header.url}>/{header.title}/</LinkHoverStyled>
    </h1>
  </HeaderStyled>
)

export default Header
