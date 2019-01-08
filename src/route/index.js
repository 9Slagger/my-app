import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../views/HomePage'
import ProductPage from '../views/ProductPage'
import NotFoundPage from '../views/NotFoundPage'
import ProductEditPage from '../views/ProductPage/ProductEdit'

const Routing = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/product" component={ProductPage} />
    <Route exact path="/product/add" component={ProductEditPage} />
    <Route exact path="/product/edit/:id" component={ProductEditPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routing
