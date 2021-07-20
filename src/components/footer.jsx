import React from 'react'
import styled from 'styled-components'

import { ExternalLinkStyled } from './styled/LinkStyled'

const FooterStyled = styled.footer`
  padding: 1rem 1rem 1.45rem;
`

const Footer = () => (
  <FooterStyled>
    <h1>
      <ExternalLinkStyled href="https://joellesenne.dev" target="_blank" rel="noopener noreferrer">
        /joellesenne.dev/
      </ExternalLinkStyled>
    </h1>
  </FooterStyled>
)

export default Footer
