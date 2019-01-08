import { combineReducers } from 'redux'
import {reducer as reduxForm } from 'redux-form'
import { connectRouter } from 'connected-react-router'
import productReducer from './productReducer'

export default history =>
  combineReducers({
    form: reduxForm,
    product: productReducer,
    router: connectRouter(history)
  })
