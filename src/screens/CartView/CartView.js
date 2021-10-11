import React, { useState } from 'react';

import './CartView.css';
import Title from '../../components/Title/Title';
import Product from '../../components/Product/Product';
import Button from '../../components/Button/Button';

const CartView = ({ basket, count, onPlus, onMinus, deleteFromBasket }) => {
	return (
		<div className='wrapper'>
			<Title title='Basket' />
			<div className='productList'>
				{basket.map((product) => (
					<Product
						product={product}
						key={product.id}
						buttonsClassName='productButtonsBasket'
					/>
				))}
				<div className='count'>
					<button onClick={onPlus}>+1</button>
					<button onClick={onMinus}>-1</button>
					<button onClick={deleteFromBasket}>Del</button>
					<p className='total'>{count}</p>
				</div>
			</div>
		</div>
	);
};

export default CartView;
