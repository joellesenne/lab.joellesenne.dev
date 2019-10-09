import React from 'react'
import styled from 'styled-components'

import { ExternalLinkStyled } from './styled/LinkStyled'

const Footer = styled.footer`
  padding: 1rem 1rem 1.45rem;
`

const Index = () => (
  <Footer>
    <h1>
      <ExternalLinkStyled href="https://joellesenne.dev" target="_blank" rel="noopener noreferrer">
        /joellesenne.dev/
      </ExternalLinkStyled>
    </h1>
  </Footer>
)

export default Index
