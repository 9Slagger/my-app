import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import FormField from '../../../common/FormField';
import { ProductFormFields } from './formFields';

class ProductForm extends Component {
	renderFields(FormFields) {
		return FormFields.map(({ label, name, type, required }, index) => (
			<Field key={index} label={label} name={name} type={type} required={required} component={FormField} />
		));
	}

	render() {
		const { onProductSubmit, handleSubmit, product } = this.props;
		return (
			<div>
				<form onSubmit={handleSubmit(onProductSubmit)}>
					{this.renderFields(ProductFormFields)}
					<button className="btn btn-block btn-info title" type="submit">
						Save
					</button>
				</form>
			</div>
		);
	}
}

const validate = values => {
	const errors = {};
	ProductFormFields.forEach(({ name, required }) => {
		if (!values[name] && required) {
			errors[name] = 'กรุณากรอกข้อมูล';
		}
	});
	return errors;
};

const ProductForms = reduxForm({ validate, form: 'productform', enableReinitialize : true })(ProductForm);

const mapStateToProps = ({ product }) => {
	if (product.data.id) {
		return { initialValues: product.data };
	} else {
		return {};
	}
};

export default connect(
	mapStateToProps,
	null
)(ProductForms);
