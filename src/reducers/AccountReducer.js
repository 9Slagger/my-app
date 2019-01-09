import {
    ACCOUNT_EDIT,
    ACCOUNT_EDIT_FAIL,
    ACCOUNT_EDIT_SUCCESS,
    ACCOUNT_FETCH,
    ACCOUNT_FETCH_FAIL,
    ACCOUNT_FETCH_SUCCESS
} from '../actions/type';

const initialState = {
	data: [],
	isFetching: false,
	isError: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case ACCOUNT_FETCH:
			return { ...state, isFetching: true };
		case ACCOUNT_FETCH_SUCCESS:
			return { ...state, isFetching: false, data: payload };
		case ACCOUNT_FETCH_FAIL:
			return { ...state, isFetching: false, isError: true };

		default:
			return state;
	}
};
