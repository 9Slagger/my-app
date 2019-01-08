import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as reduxForm } from 'redux-form'
import productReducer from './productReducer'

export default history =>
  combineReducers({
    form: reduxForm,
    product: productReducer,
    router: connectRouter(history)
  })
