import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

// UI-Components, Pages, Business-Components
import Home from '../home/home'
import NotFound from '../not-found/not-found'
import Footer from '../../business-components/footer/footer'

// Styled
import { Container } from './application.styled'
import GlobalStyles from '../../styles/global'
import themeDefault from '../../styles/theme/default'

const Application = () => (
  <ThemeProvider theme={themeDefault} >
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="" component={NotFound} />
      </Switch>
      <Footer />
      <GlobalStyles />
    </Container>
  </ThemeProvider>
)

export default Application
