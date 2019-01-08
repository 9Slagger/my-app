import React, { Component } from 'react';
import MainLayout from '../../../common/MainLayout';
import ProductForm from '../component/ProductForm';

class ProductEdit extends Component {
	render() {
		return (
			<MainLayout>
				<div className="container">
					<ProductForm />
				</div>
			</MainLayout>
		);
	}
}

export default ProductEdit;
