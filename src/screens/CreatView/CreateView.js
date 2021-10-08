import React from 'react';
import Form from '../../components/Form/Form';
import './CreateView.css';
import Title from '../../components/Title/Title';

const CreateView = (props) => {
	return (
		<div className='wrapper'>
			<Title title='Create Product' />
			<Form
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
