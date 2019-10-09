/* eslint-disable react/button-has-type */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../hook/userToggleMode'
import { lightTheme, darkTheme } from '../theme/toggleTheme'
import { GlobalStyles } from '../theme/globalStyle'

import Layout from '../components/layout'
import { ArticleStyled } from '../components/styled/ArticleStyled'
import { TitleStyled, ParagraphStyled } from '../components/styled/Typography.Styled'
import { InternalLinkStyled } from '../components/styled/LinkStyled'
import Toggle from '../components/module/Toggle'

import SEO from '../components/seo'

const NotFoundPage = () => {
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Layout>
        <SEO title="404: Not found" />
        <ArticleStyled>
          <TitleStyled>NOT FOUND</TitleStyled>
          <ParagraphStyled>You just hit a route that doesn't exist... the sadness.</ParagraphStyled>
          <TitleStyled>
            <InternalLinkStyled to="/">Return</InternalLinkStyled>
          </TitleStyled>
        </ArticleStyled>
      </Layout>
      <Toggle toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default NotFoundPage
