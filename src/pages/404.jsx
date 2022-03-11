import React from 'react'
import {ThemeProvider} from 'styled-components'
import {useDarkMode} from '../hooks/userToggleMode'
import {lightTheme, darkTheme} from '../theme/toggleTheme'
import {GlobalStyles} from '../theme/globalStyle'

import Layout from '../components/layout'
import {ArticleStyled} from '../components/styled/ArticleStyled'
import {TitleStyled, ParagraphStyled} from '../components/styled/Typography.Styled'
import {InternalLinkStyled} from '../components/styled/LinkStyled'
import {Not_found} from '../data'
import Toggle from '../components/module/Toggle'

import SEO from '../components/seo'

const NotFoundPage = () => {
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Layout>
        <SEO title={Not_found.title} />
        <ArticleStyled>
          <TitleStyled>{Not_found.title}</TitleStyled>
          <ParagraphStyled>{Not_found.subtitle}</ParagraphStyled>
          <TitleStyled>
            <InternalLinkStyled to={Not_found.url}>{Not_found.link}</InternalLinkStyled>
          </TitleStyled>
        </ArticleStyled>
      </Layout>
      <Toggle toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default NotFoundPage
