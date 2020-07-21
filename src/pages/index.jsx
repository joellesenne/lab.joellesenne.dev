import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../hook/userToggleMode'
import { lightTheme, darkTheme } from '../theme/toggleTheme'
import { GlobalStyles } from '../theme/globalStyle'

import Layout from '../components/layout'
import ListsItem from '../components/module/ListsItem'
import Toggle from '../components/module/Toggle'
import SEO from '../components/seo'

const Index = () => {
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Layout>
        <SEO title="Lab" />
        <ListsItem />
      </Layout>
      <Toggle toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default Index
