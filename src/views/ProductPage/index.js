import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, deleteProduct } from '../../actions';
import MainLayout from '../../common/MainLayout';

class ProductPage extends Component {
	componentDidMount() {
		this.props.fetchProducts();
	}

	renderProduct(products) {
		return products.map((product, index) => (
			<div className="" key={index}>
				<h4>{product.name}</h4>
				<Link className="btn btn-warning mr-2" to={`/product/edit/${product.id}`}>
					Edit
				</Link>
				<button onClick={() => this.props.deleteProduct(product.id)} className="btn btn-danger">
					Delete
				</button>
			</div>
		));
	}

	render() {
		const { product } = this.props;
		console.log(product && Array.isArray(product))
		return (
			<MainLayout>
				<h1>Product Page</h1>
				<Link className="btn btn-primary" to="/product/add">
					Add Product
				</Link>
				{product.data && Array.isArray(product.data) && (product.data && this.renderProduct(product.data))}
			</MainLayout>
		);
	}
}

const mapStateToProps = ({ product }) => ({
	product: product,
});

const mapDispatchToProps = {
	fetchProducts,
	deleteProduct,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductPage);
