import './MainView.css';
import Product from '../../components/Product/Product';
import Button from '../../components/Button/Button';
import Pagination from '../../components/Pagination/Pagination';
import React, { Component } from 'react';

const MainView = ({ products, onEdit, onDel, onAdd, onCreate }) => {
	return (
		<div className='wrapper'>
			<div className='productList'>
				{products.map((product) => (
					<Product
						product={product}
						buttonsClassName='productButtons'
						key={product.id}
						title={product.title}
						description={product.description}
						price={product.price}
						onEdit={(event) => onEdit(event, product.id)}
						onDel={(event) => onDel(event, product.id)}
						onAdd={(event) => onAdd(event, product.id)}
					/>
				))}
			</div>
			<Button className='buttonCreate' title='Create' onClick={onCreate} />
		</div>
	);
};

export default MainView;
