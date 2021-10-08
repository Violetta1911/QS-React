import React from 'react';
import './Form.css';
import Button from '../Button/Button';

const Form = (props) => {
	return (
		<form className='creatingForm' onSubmit={(event) => props.onSave(event)}>
			<input
				className='creatingFormField'
				type='text'
				value={props.productTitle}
				onChange={(event) => props.onCreateProductTitle(event)}
				placeholder={props.editProductTitle}
			/>
			<input
				className='creatingFormField'
				type='text'
				placeholder={props.editProductDescription}
				value={props.productDescription}
				onChange={(event) => props.onCreateProductDescription(event)}
			/>
			<input
				className='creatingFormField'
				type='text'
				value={props.productPrice}
				onChange={(event) => props.onCreateProductPrice(event)}
				placeholder={props.editProductPrice}
			/>
			<Button className='buttonSave' title='Save' />
		</form>
	);
};

export default Form;
