import React from 'react';
import './MainView.css';
import Product from '../../components/Product/Product';

const MainView = ({ products, onEdit }) => {
	return (
		<div className='wrapper'>
			<div className='productList'>
				{products.map((product) => (
					<Product
						key={product.id}
						title={product.title}
						description={product.description}
						price={product.price}
						onEdit={onEdit}
					/>
				))}
			</div>
		</div>
	);
};

export default MainView;
