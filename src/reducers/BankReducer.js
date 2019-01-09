import {
    BANKNOTE_FETCH,
    BANKNOTE_FETCH_SUCCESS,
    BANKNOTE_FETCH_FAIL
} from '../actions/type';

const initialState = {
	data: [],
	isFetching: false,
	isError: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case BANKNOTE_FETCH:
			return { ...state, isFetching: true };
		case BANKNOTE_FETCH_SUCCESS:
			return { ...state, isFetching: false, data: payload };
		case BANKNOTE_FETCH_FAIL:
			return { ...state, isFetching: false, isError: true };

		default:
			return state;
	}
};
