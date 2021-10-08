import React from 'react';
import Form from '../../components/Form/Form';
import './EditView.css';
import Title from '../../components/Title/Title';

const EditView = (props) => {
	return (
		<div className='wrapper'>
			<Title title='Edit Product' />
			<Form
				editProductTitle={props.editTitle}
				editProductDescription={props.editDescription}
				editProductPrice={props.editPrice}
				onSave={props.onSave}
				onCreateProductTitle={props.onCreateProductTitle}
				onCreateProductDescription={props.onCreateProductDescription}
				onCreateProductPrice={props.onCreateProductPrice}
			/>
		</div>
	);
};

export default EditView;
