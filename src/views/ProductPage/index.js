import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';
import MainLayout from '../../common/MainLayout'

class ProductPage extends Component {
  componentWillMount() {
		this.props.fetchProducts()
	}

	componentDidMount() {
		this.props.fetchProducts()
  }
  
	render() {
		return (
			<MainLayout>
				<h1>Product Page</h1>
			</MainLayout>
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
