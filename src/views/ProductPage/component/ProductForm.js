import React, { Component } from 'react';
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
		return (
			<div>
				<form>
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

const ProductForms = reduxForm({ validate, form: 'productform' })(ProductForm);

export default ProductForms;
