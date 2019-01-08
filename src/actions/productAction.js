import { PRODUCT_FETCHING, PRODUCT_FETCHING_SUCCESS, PRODUCT_FETCHING_FAIL } from './type';

const makedata = [{ id: 1, productname: 'a', price: 120 }, { id: 2, productname: 'v', price: 240 }];

export const fetchProducts = () => {
	return dispatch => {
		// จำลองว่ากำลัง call api
		dispatch({ type: PRODUCT_FETCHING });
        // จำลองว่า back-end ตอบ response กลับมาแล้ว
		if (Math.floor(Math.random() * (+3 - +1)) + +1 % 2 === 1) {
			dispatch({
				type: PRODUCT_FETCHING_SUCCESS,
				payload: makedata
			});
		} else {
			dispatch({ type: PRODUCT_FETCHING_FAIL });
		}
	};
};
