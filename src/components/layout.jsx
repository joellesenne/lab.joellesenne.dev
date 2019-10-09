import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

const LayoutStyled = styled.main`
  margin: 0 auto;
  padding: 1rem;
  max-width: 960px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutStyled>
      <Header siteTitle={data.site.siteMetadata.title} />
      <section>{children}</section>
      <Footer />
    </LayoutStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
