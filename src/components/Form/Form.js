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
				onChange={(event) => props.onChangeProductTitle(event)}
				placeholder={props.placeholderTitle}
			/>
			<input
				className='creatingFormField'
				type='text'
				placeholder={props.placeholderDescription}
				value={props.productDescription}
				onChange={(event) => props.onChangeProductDescription(event)}
			/>
			<input
				className='creatingFormField'
				type='text'
				value={props.productPrice}
				onChange={(event) => props.onChangeProductPrice(event)}
				placeholder={props.placeholderPrice}
			/>
			<Button className='buttonSave' title='Save' />
		</form>
	);
};

export default Form;
