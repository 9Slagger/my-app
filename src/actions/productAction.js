import axios from 'axios';
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
} from './type';

export const fetchProducts = () => {
	return dispatch => {
		dispatch({
			type: PRODUCT_FETCHING,
		});
		axios
			.get('http://localhost:3000/mockproducts')
			.then(response => {
				dispatch({
					type: PRODUCT_FETCHING_SUCCESS,
					payload: response.data,
				});
			})
			.catch(error => {
				dispatch({
					type: PRODUCT_FETCHING_FAIL,
				});
				console.log(error);
			});
	};
};

export const fetchProduct = (id, values) => {
	return dispatch => {
		dispatch({
			type: PRODUCT_FETCHING,
		});
		axios
			.get(`http://localhost:3000/mockproducts/${id}`)
			.then(response => {
				dispatch({
					type: PRODUCT_FETCHING_SUCCESS,
					payload: response.data,
				});
			})
			.catch(error => {
				dispatch({
					type: PRODUCT_FETCHING_FAIL,
				});
				console.log(error);
			});
	};
};

export const createProduct = data => {
	return dispatch => {
		dispatch({
			type: PRODUCT_CREATE,
		});
		axios
			.post('http://localhost:3000/mockproducts', data)
			.then(response => {
				dispatch({
					type: PRODUCT_CREATE_SUCCESS,
					payload: response.data,
				});
				alert('เพิ่มข้อมูลสำเร็จ!');
			})
			.catch(error => {
				dispatch({
					type: PRODUCT_CREATE_FAIL,
				});
				alert('เพิ่มข้อมูลล้มเหลว!');
				console.log(error);
			});
	};
};

export const updateProduct = (id, data) => {
	return dispatch => {
		dispatch({
			type: PRODUCT_UPDATE,
		});
		console.log('id', id);
		console.log('data', data);
		axios
			.put(`http://localhost:3000/mockproducts/${id}`, data)
			.then(response => {
				dispatch({
					type: PRODUCT_UPDATE_SUCCESS,
					payload: response.data,
				});
				alert('แก้ไขข้อมูลสำเร็จ!');
			})
			.catch(error => {
				dispatch({
					type: PRODUCT_UPDATE_FAIL,
				});
				alert('แก้ไขข้อมูลล้มเหลว!');
				console.log(error);
			});
	};
};

export const deleteProduct = id => {
	return dispatch => {
		dispatch({
			type: PRODUCT_DELETE,
		});
		axios
			.delete(`http://localhost:3000/mockproducts/${id}`)
			.then(response => {
				dispatch({
					type: PRODUCT_DELETE_SUCCESS,
					payload: response.data,
				});
				alert('แก้ไขข้อมูลสำเร็จ!');
				dispatch(fetchProducts())
			})
			.catch(error => {
				dispatch({
					type: PRODUCT_DELETE_FAIL,
				});
				alert('แก้ไขข้อมูลสำเร็จ!');
				console.log(error);
			});
	};
};
