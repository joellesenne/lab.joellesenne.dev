import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from '../components/header'
import Footer from '../components/footer'

const LayoutStyled = styled.main`
  margin: 0 auto;
  padding: 1rem;
  max-width: 960px;
`

const Layout = ({ children }) => {
  	return (
		<LayoutStyled>
		  <Header/>
		  <section>{children}</section>
		  <Footer />
		</LayoutStyled>
	)
}

Layout.propTypes = {
  	children: PropTypes.node.isRequired,
}

export default Layout
