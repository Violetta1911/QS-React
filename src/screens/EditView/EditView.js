import React from 'react';
import ProductForm from '../../components/ProductForm/ProductForm';
import './EditView.css';
import Title from '../../components/Title/Title';

const EditView = (props) => {
	return (
		<div className='wrapper'>
			<Title title='Edit Product' />
			<ProductForm
				placeholderTitle={props.editTitle}
				placeholderDescription={props.editDescription}
				placeholderPrice={props.editPrice}
				onSave={props.onSave}
				onChangeProductTitle={props.onChangeProductTitle}
				onChangeProductDescription={props.onChangeProductDescription}
				onChangeProductPrice={props.onChangeProductPrice}
			/>
		</div>
	);
};

export default EditView;
