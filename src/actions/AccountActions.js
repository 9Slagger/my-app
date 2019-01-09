import axios from 'axios';
import {
    ACCOUNT_EDIT,
    ACCOUNT_EDIT_FAIL,
    ACCOUNT_EDIT_SUCCESS,
    ACCOUNT_FETCH,
    ACCOUNT_FETCH_FAIL,
    ACCOUNT_FETCH_SUCCESS
} from './type';

export const fetchAccounts = () => {
	return dispatch => {
		dispatch({
			type: ACCOUNT_FETCH,
		});
		axios
			.get(`http://localhost:3000/account`)
			.then(response => {
				dispatch({
					type: ACCOUNT_FETCH_SUCCESS,
					payload: response.data,
				});
			})
			.catch(error => {
				dispatch({
					type: ACCOUNT_FETCH_FAIL,
				});
				console.log(error);
			});
	};
};

export const editAccount = (id, data) => {
	return dispatch => {
		dispatch({
			type: ACCOUNT_EDIT,
		});
		console.log(id)
		axios
			.put(`http://localhost:3000/account/${id}`,data)
			.then(() => {
				dispatch({
					type: ACCOUNT_EDIT_SUCCESS
				});
				dispatch(fetchAccounts())
			})
			.catch(error => {
				dispatch({
					type: ACCOUNT_EDIT_FAIL,
				});
				console.log(error);
			});
	};
};