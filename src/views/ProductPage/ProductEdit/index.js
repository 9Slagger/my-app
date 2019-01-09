import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProduct, updateProduct, fetchProduct } from '../../../actions';
import MainLayout from '../../../common/MainLayout';
import ProductForm from '../component/ProductForm';

class ProductEdit extends Component {
	componentDidMount() {
		if (this.props.match.params.id) {
			this.props.fetchProduct(this.props.match.params.id);
		}
	}
	
	render() {
		const { formValues, createProduct, updateProduct, match } = this.props;
		return (
			<MainLayout>
				<div className="container">
					{match.path.indexOf('add') > 0 ? (
						<div>
							<h2>Add Product</h2>
							<ProductForm onProductSubmit={() => createProduct(formValues && formValues.values)} />
						</div>
					) : (
						<div>
							<h2>Edit Product</h2>
							<ProductForm onProductSubmit={() => updateProduct(match.params.id, formValues && formValues.values)} />
						</div>
					)}
				</div>
			</MainLayout>
		);
	}
}

const mapStateToProps = ({ form, product }) => {
	return { formValues: form.productform ? form.productform : null, product };
};

const mapDispatchToProps = {
	createProduct,
	updateProduct,
	fetchProduct,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductEdit);
