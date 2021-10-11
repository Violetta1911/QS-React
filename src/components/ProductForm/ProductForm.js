import React from 'react';
import './ProductForm.css';
import Button from '../Button/Button';

const ProductForm = (props) => {
	return (
		<form className='creatingForm' onSubmit={(event) => props.onSave(event)}>
			<input
				maxlength='50'
				className='creatingFormField'
				type='text'
				value={props.productTitle}
				onChange={(event) => props.onChangeProductTitle(event)}
				placeholder={props.placeholderTitle}
			/>
			<input
				maxlength='100'
				className='creatingFormField'
				type='text'
				placeholder={props.placeholderDescription}
				value={props.productDescription}
				onChange={(event) => props.onChangeProductDescription(event)}
			/>
			<input
				className='creatingFormField'
				type='number'
				value={props.productPrice}
				onChange={(event) => props.onChangeProductPrice(event)}
				placeholder={props.placeholderPrice}
			/>
			<Button className='buttonSave' title='Save' />
		</form>
	);
};

export default ProductForm;
