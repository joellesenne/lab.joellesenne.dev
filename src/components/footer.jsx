import React from 'react'
import styled from 'styled-components'
import {ExternalLinkStyled} from './styled/LinkStyled'
import {footer} from '../data'

const FooterStyled = styled.footer`
  padding: 1rem 1rem 1.45rem;
`

const Footer = () => (
  <FooterStyled>
    <h1>
      <ExternalLinkStyled href={footer.url} target="_blank" rel="noopener noreferrer">
				/{footer.title}/
      </ExternalLinkStyled>
    </h1>
  </FooterStyled>
)

export default Footer
