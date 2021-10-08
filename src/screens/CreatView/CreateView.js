import React from 'react';
import Form from '../../components/Form/Form';
import './CreateView.css';
import Title from '../../components/Title/Title';

const CreateView = (props) => {
	return (
		<div className='wrapper'>
			<Title title='Create Product' />
			<Form
				productTitle='title'
				productDescription='description'
				productPrice='price'
				onSave={props.onSave}
				onCreateProductTitle={props.onCreateProductTitle}
				onCreateProductDescription={props.onCreateProductDescription}
				onCreateProductPrice={props.onCreateProductPrice}
			/>
		</div>
	);
};

export default CreateView;
