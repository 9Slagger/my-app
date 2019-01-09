import axios from 'axios';
import {
	PRODUCT_FETCHING,
	PRODUCT_FETCHING_SUCCESS,
	PRODUCT_FETCHING_FAIL,
	PRODUCT_CREATE,
	PRODUCT_CREATE_SUCCESS,
	// PRODUCT_CREATE_FAIL,
	PRODUCT_UPDATE,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_FAIL,
	PRODUCT_DELETE,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_DELETE_FAIL,
} from './type';

const makedata = [{ id: 1, productname: 'a', price: 120 }, { id: 2, productname: 'v', price: 240 }];

export const fetchProducts = () => {
	return dispatch => {
		dispatch({
			type: PRODUCT_FETCHING,
		})
		axios
			.get('http://localhost:3000/mockproducts')
			.then(response => {
				dispatch({
					type: PRODUCT_FETCHING_SUCCESS,
					payload: response.data,
				})
			})
			.catch(error => {
				dispatch({
					type: PRODUCT_FETCHING_FAIL,
				})
				console.log(error);
			});
	};
};

export const fetchProduct = (id, values) => {
	return dispatch => {
		dispatch({
			type: PRODUCT_FETCHING,
		})
		axios
			.get(`http://localhost:3000/mockproducts/${id}`)
			.then(response => {
				dispatch({
					type: PRODUCT_FETCHING_SUCCESS,
					payload: response.data,
				})
			})
			.catch(error => {
				dispatch({
					type: PRODUCT_FETCHING_FAIL,
				})
				console.log(error);
			});
	};
};

export const createProduct = () => {
	return dispatch => {
		// จำลองว่ากำลัง call api
		dispatch({ type: PRODUCT_CREATE });
		// จำลองว่า back-end ตอบ response กลับมาแล้ว
		dispatch({
			type: PRODUCT_CREATE_SUCCESS,
			payload: makedata,
		});
	};
};

export const updateProduct = () => {
	return dispatch => {
		// จำลองว่ากำลัง call api
		dispatch({ type: PRODUCT_UPDATE });
		// จำลองว่า back-end ตอบ response กลับมาแล้ว
		if (Math.floor(Math.random() * (+3 - +1)) + (+1 % 2) === 1) {
			dispatch({
				type: PRODUCT_UPDATE_SUCCESS,
				payload: makedata,
			});
		} else {
			dispatch({ type: PRODUCT_UPDATE_FAIL });
		}
	};
};

export const deleteProduct = () => {
	return dispatch => {
		// จำลองว่ากำลัง call api
		dispatch({ type: PRODUCT_DELETE });
		// จำลองว่า back-end ตอบ response กลับมาแล้ว
		if (Math.floor(Math.random() * (+3 - +1)) + (+1 % 2) === 1) {
			dispatch({
				type: PRODUCT_DELETE_SUCCESS,
				payload: makedata,
			});
		} else {
			dispatch({ type: PRODUCT_DELETE_FAIL });
		}
	};
};
