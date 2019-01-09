import { combineReducers } from 'redux'
import {reducer as reduxForm } from 'redux-form'
import { connectRouter } from 'connected-react-router'
import BankReducer from './BankReducer'
import AccountReducer from './AccountReducer'

export default history =>
  combineReducers({
    form: reduxForm,
    accounts: AccountReducer,
    banks: BankReducer,
    router: connectRouter(history)
  })
