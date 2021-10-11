import React from 'react';
import ProductForm from '../../components/ProductForm/ProductForm';
import './CreateView.css';
import Title from '../../components/Title/Title';

const CreateView = (props) => {
	return (
		<div className='wrapper'>
			<Title title='Create Product' />
			<ProductForm
				placeholderTitle='title'
				placeholderDescription='description'
				placeholderPrice='price'
				onSave={props.onSave}
				onChangeProductTitle={props.onCreateProductTitle}
				onChangeProductDescription={props.onCreateProductDescription}
				onChangeProductPrice={props.onCreateProductPrice}
			/>
		</div>
	);
};

export default CreateView;
