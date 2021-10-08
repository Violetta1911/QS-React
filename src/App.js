import React, { useEffect, useState } from 'react';
import './App.css';
import MainView from './screens/MainView/MainView';
import EditView from './screens/EditView/EditView';
import CreateView from './screens/CreatView/CreateView';

const App = () => {
	const [screen, setScreen] = useState('main');
	const [products, setProductsState] = useState([]);
	const [basket, setBasket] = useState([]);
	const [isAdd, setIsAdd] = useState(true);
	const [newProductTitle, setNewProductTitle] = useState('');
	const [newProductDescription, setNewProductDescription] = useState('');
	const [newProductPrice, setNewProductPrice] = useState('');
	const [editTitle, setEditTitle] = useState('');
	const [editDescription, setEditDescription] = useState('');
	const [editPrice, setEditPrice] = useState('');

	useEffect(() => {
		getProducts();
	}, []);

	async function getProducts() {
		const response = await fetch('http://localhost:3000/products');
		const data = await response.json();
		setProductsState(data);
	}

	const onEdit = (event, key) => {
		event.preventDefault();
		const editProduct = products.find((item) => item.id === key);
		setEditTitle(editProduct.title);
		setEditDescription(editProduct.description);
		setEditPrice(editProduct.price);
		setScreen('edit');
	};

	const onDel = (event, key) => {
		event.preventDefault();
		const newProductList = products.filter((product) => product.id !== key);
		setProductsState(newProductList);
	};
	const onAdd = (event, key) => {
		event.preventDefault();
		const basketProducts = products.filter((product) => product.id === key);
		setBasket(basketProducts);
		// setIsAdd(false);
		console.log(basketProducts);
	};

	const onCreateView = (event) => {
		event.preventDefault();
		setScreen('create');
	};
	const onSave = (event) => {
		event.preventDefault();
		setProductsState([
			...products,
			{
				title: newProductTitle,
				price: +newProductPrice,
				description: newProductDescription,
				inCart: false,
				id: Date.now(),
			},
		]);

		setScreen('main');
	};

	const onCreateProductTitle = (event) => {
		event.preventDefault();
		setNewProductTitle(event.target.value);
	};
	const onCreateProductDescription = (event) => {
		event.preventDefault();
		setNewProductDescription(event.target.value);
	};
	const onCreateProductPrice = (event) => {
		event.preventDefault();
		setNewProductPrice(event.target.value);
	};
	let content;

	if (screen === 'main') {
		content = (
			<MainView
				products={products}
				onEdit={onEdit}
				onDel={onDel}
				onAdd={onAdd}
				onCreateView={onCreateView}
				active={isAdd}
			/>
		);
	}

	if (screen === 'edit') {
		content = (
			<EditView
				editTitle={editTitle}
				editDescription={editDescription}
				editPrice={editPrice}
				onSave={onSave}
				onCreateProductTitle={onCreateProductTitle}
				onCreateProductDescription={onCreateProductDescription}
				onCreateProductPrice={onCreateProductPrice}
			/>
		);
	}

	if (screen === 'create') {
		content = (
			<CreateView
				onSave={onSave}
				onCreateProductTitle={onCreateProductTitle}
				onCreateProductDescription={onCreateProductDescription}
				onCreateProductPrice={onCreateProductPrice}
			/>
		);
	}

	return <div className='App'>{content}</div>;
};

export default App;
