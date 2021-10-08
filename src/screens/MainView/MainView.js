import React from 'react';
import './MainView.css';
import Product from '../../components/Product/Product';
import Button from '../../components/Button/Button';

const MainView = ({ products, onEdit, onDel, onAdd, active, onCreateView }) => {
	return (
		<div className='wrapper'>
			<div className='productList'>
				{products.map((product) => (
					<Product
						key={product.id}
						title={product.title}
						description={product.description}
						price={product.price}
						active={active}
						onEdit={(event) => onEdit(event, product.id)}
						onDel={(event) => onDel(event, product.id)}
						onAdd={(event) => (active ? onAdd(event, product.id) : !active)}
					/>
				))}
			</div>
			<Button className='buttonCreate' title='Create' onClick={onCreateView} />
		</div>
	);
};

export default MainView;
