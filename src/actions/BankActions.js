import axios from 'axios';
import {
    BANKNOTE_FETCH,
    BANKNOTE_FETCH_SUCCESS,
	BANKNOTE_FETCH_FAIL,
	BANKNOTE_DELETE,
	BANKNOTE_DELETE_SUCCESS,
	BANKNOTE_DELETE_FAIL
} from './type';

export const fetchBanks = () => {
	return dispatch => {
		dispatch({
			type: BANKNOTE_FETCH,
		});
		axios
			.get(`http://localhost:3000/banknote`)
			.then(response => {
				dispatch({
					type: BANKNOTE_FETCH_SUCCESS,
					payload: response.data,
				});
			})
			.catch(error => {
				dispatch({
					type: BANKNOTE_FETCH_FAIL,
				});
				console.log(error);
			});
	};
};

export const deleteBank = id => {
	return dispatch => {
		dispatch({
			type: BANKNOTE_DELETE,
		});
		console.log(id)
		axios
			.delete(`http://localhost:3000/banknote/${id}`)
			.then(() => {
				dispatch({
					type: BANKNOTE_DELETE_SUCCESS
				});
				dispatch(fetchBanks())
			})
			.catch(error => {
				dispatch({
					type: BANKNOTE_DELETE_FAIL,
				});
				console.log(error);
			});
	};
};