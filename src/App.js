import React, { useEffect, useState } from 'react';
import './App.css';
import MainView from './screens/MainView/MainView';
import EditView from './screens/EditView/EditView';

const App = () => {
	const [screen, setScreen] = useState('main');
	const [products, setProductsState] = useState([]);

	const onEdit = (event) => {
		event.preventDefault();
		setScreen('edit');
	};
	// const onDel = (event, key) => {
	// 	event.preventDefault();
	// 	const newProductList = products.filter((product) => product.id !== key);
	// 	setProductsState(newProductList);
	// };

	useEffect(() => {
		getProducts();
	}, []);

	async function getProducts() {
		const response = await fetch('http://localhost:3000/products');
		const data = await response.json();
		setProductsState(data);
	}
	console.log(products);

	let content = <MainView products={products} onEdit={onEdit}/>;

	if (screen === 'edit') {
		content = <EditView />;
	}

	return <div className='App'>{content}</div>;
};

export default App;
