import React from 'react';
import Form from '../../components/Form/Form';
import './EditView.css';
import Title from '../../components/Title/Title';

const EditView = (props) => {
	return (
		<div className='wrapper'>
			<Title title='Edit Product' />
			<Form
				placeholderTitle={props.editTitle}
				placeholderDescription={props.editDescription}
				placeholderPrice={props.editPrice}
				onSave={props.onSave}
				onChangeProductTitle={props.onEditProductTitle}
				onChangeProductDescription={props.onEditProductDescription}
				onChangeProductPrice={props.onEditProductPrice}
			/>
		</div>
	);
};

export default EditView;
