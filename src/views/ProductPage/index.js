import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';

class ProductPage extends Component {
  componentWillMount() {
		this.props.fetchProducts()
	}

	componentDidMount() {
		this.props.fetchProducts()
  }
  
	render() {
		return (
			<div>
				<h1>Product Page</h1>
			</div>
		);
	}
}

const mapStateToProps = ({ product }) => ({
	product: product,
});

const mapDispatchToProps = {
	fetchProducts,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductPage);
