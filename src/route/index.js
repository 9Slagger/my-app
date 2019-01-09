import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NotFoundPage from '../views/NotFoundPage'
import BankPage from '../views/BankPage'

const Routing = () => (
  <Switch>
    <Route exact path="/" component={BankPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routing
