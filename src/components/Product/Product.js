import React from 'react';
import './Product.css';
import Button from '../Button/Button';

const Product = ({ product, onEdit, onDel, onAdd, buttonsClassName }) => {
	const { title, description, price } = product;
	return (
		<div className='product'>
			<h1 className='title'>{title}</h1>
			<p className='description'>{description}</p>
			<p className='price'>{price} $</p>
			<div className={buttonsClassName}>
				<Button className='buttonEdit' title='Edit' onClick={onEdit} />
				<Button className='buttonDel' title='Del' onClick={onDel} />
				<Button className='buttonAdd' title='Add to' onClick={onAdd} />
			</div>
		</div>
	);
};

export default Product;
