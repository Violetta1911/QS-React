import React from 'react';

import './CartView.css';
import Title from '../../components/Title/Title';
import Product from '../../components/Product/Product';
import Button from '../../components/Button/Button';

const CartView = (props) => {
	return (
		<div className='wrapper'>
			<Title title='Basket' />
			<div className='productList'>
				{props.basket.map((product) => (
					<Product
						key={product.id}
						title={product.title}
						description={product.description}
						price={product.price}
						className='productButtonsBasket'
					/>
				))}
			</div>
			<Button title='delete' className='deleteBasket' />
		</div>
	);
};

export default CartView;
