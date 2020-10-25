import React from 'react'
import { Switch, Route } from 'react-router-dom'

// UI-Components, Pages, Business-Components
import Home from '../home/home'
import NotFound from '../not-found/not-found'
import Footer from '../../business-components/footer/footer'

// Styled Components
import { Container } from './styled-components'
import GlobalStyles from '../../styles/global-styles'

const Application = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="" component={NotFound} />
    </Switch>
    <Footer />
    <GlobalStyles />
  </Container>
)

export default Application
