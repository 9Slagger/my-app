import { PRODUCT_FETCHING, PRODUCT_FETCHING_FAIL, PRODUCT_FETCHING_SUCCESS } from '../actions/type'

const initialState = {
    data : [],
    isFetching : false,
    isError : false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case PRODUCT_FETCHING:
    return { ...state, isFetching: true }
    case PRODUCT_FETCHING_SUCCESS:
    return { ...state, isFetching: false, data: payload, }
    case PRODUCT_FETCHING_FAIL:
    return { ...state, isFetching: false, isError: true }

  default:
    return state
  }
}
