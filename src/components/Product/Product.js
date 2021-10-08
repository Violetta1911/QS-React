import React from 'react';
import './Product.css';
import Button from '../Button/Button';

const Product = (props) => {
	return (
		<div className='product'>
			<h1 className='productTitle'>{props.title}</h1>
			<p className='productDescription'>{props.description}</p>
			<p className='productPrice'>{props.price} $</p>
			<div className='productButtons'>
				<Button className='buttonEdit' title='Edit' onClick={props.onEdit} />
				<Button className='buttonDel' title='Del' onClick={props.onDel} />
				<Button
					className='buttonAdd'
					title='Add to'
					active={props.active}
					onClick={props.onAdd}
				/>
			</div>
		</div>
	);
};

export default Product;
