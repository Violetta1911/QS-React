import React from 'react';

import './CartView.css';
import Title from '../../components/Title/Title';
import Product from '../../components/Product/Product';
import Button from '../../components/Button/Button';

const CartView = ({ basket }) => {
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
			</div>
			<Button title='delete' className='deleteBasket' />
		</div>
	);
};

export default CartView;
