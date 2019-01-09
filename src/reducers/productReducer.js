import {
	PRODUCT_FETCHING,
	PRODUCT_FETCHING_SUCCESS,
	PRODUCT_FETCHING_FAIL,
	PRODUCT_CREATE,
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_CREATE_FAIL,
	PRODUCT_UPDATE,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_FAIL,
	PRODUCT_DELETE,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_DELETE_FAIL,
} from '../actions/type';

const initialState = {
	data: [],
	isFetching: false,
	isError: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case PRODUCT_FETCHING:
			return { ...state, isFetching: true };
		case PRODUCT_FETCHING_SUCCESS:
			return { ...state, isFetching: false, data: payload };
		case PRODUCT_FETCHING_FAIL:
			return { ...state, isFetching: false, isError: true };

		case PRODUCT_CREATE:
			return { ...state };
		case PRODUCT_CREATE_SUCCESS:
			return { ...state, isFetching: false, isError: false, data: payload, saved: true };
		case PRODUCT_CREATE_FAIL:
			return { ...state, isFetching: false, isError: true, saved: true };

		case PRODUCT_UPDATE:
			return { ...state };
		case PRODUCT_UPDATE_SUCCESS:
			return { ...state, isFetching: false, isError: false, data: payload, saved: true };
		case PRODUCT_UPDATE_FAIL:
			return { ...state, isFetching: false, isError: true, saved: true };

		case PRODUCT_DELETE:
			return { ...state };
		case PRODUCT_DELETE_SUCCESS:
			return { ...state, isFetching: false, isError: false, data: payload, saved: true };
		case PRODUCT_DELETE_FAIL:
			return { ...state, isFetching: false, isError: true, saved: true };

		default:
			return state;
	}
};
