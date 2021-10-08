import React from 'react';
import './Product.css';
import Button from '../Button/Button';

const Product = ({ key, title, description, price, onEdit }) => {
	return (
		<div className='product' key={key}>
			<div className='productTitle'>{title}</div>
			<div className='productDescription'>{description}</div>
			<div className='productPrice'>{price}</div>
			<div className='productButtons'>
				<Button className='buttoneEdit' title='Edit' onClick={onEdit}/>
				<Button className='buttonDel' title='Del' />
				<Button className='buttonEdit' title='Add' />
			</div>
		</div>
	);
};

export default Product;
