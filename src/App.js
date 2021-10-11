import React, { useEffect, useState } from 'react';
import './App.css';
import MainView from './screens/MainView/MainView';
import EditView from './screens/EditView/EditView';
import CreateView from './screens/CreatView/CreateView';
import CartView from './screens/CartView/CartView';

const App = () => {
	const [screen, setScreen] = useState('main');
	const [products, setProducts] = useState([]);
	const [basket, setBasket] = useState([]);
	const [newProductTitle, setNewProductTitle] = useState('');
	const [newProductDescription, setNewProductDescription] = useState('');
	const [newProductPrice, setNewProductPrice] = useState('');
	const [editTitle, setEditTitle] = useState('');
	const [editDescription, setEditDescription] = useState('');
	const [editPrice, setEditPrice] = useState('');
	const [count, setCount] = useState(0);

	useEffect(() => {
		getProducts();
	}, []);

	async function getProducts() {
		const response = await fetch('http://localhost:3000/products');
		let data = await response.json();
		data.map((item) => (item.isAdd = false));
		setProducts(data);
	}

	const setUpdateProduct = (product) => {
		setEditTitle(product.title);
		setEditDescription(product.description);
		setEditPrice(product.price);
	};

	const addToBasket = (key) => {
		products.find((product) => {
			if (product.id === key) {
				setBasket([
					...basket,
					{
						title: product.title,
						price: product.price,
						description: product.description,
						inCart: true,
						id: product.id,
						isAdd: true,
					},
				]);
				product.isAdd = true;
			}
		});
	};

	const updetedProducts = products.map((item) =>
		item.title === editTitle
			? {
					title: newProductTitle ? newProductTitle : editTitle,
					price: newProductPrice ? newProductPrice : editPrice,
					description: newProductDescription
						? newProductDescription
						: editDescription,
					id: item.id,
					inCart: item.inCart,
			  }
			: item,
	);

	const onEdit = (event, key) => {
		event.preventDefault();
		createEditForm(key);
		setScreen('edit');
	};

	const onDel = (event, key) => {
		event.preventDefault();
		const newProductList = products.filter((product) => product.id !== key);
		setProducts(newProductList);
	};

	const onAdd = (event, key) => {
		event.preventDefault();
		addToBasket(key);
		setCount(1);
	};

	const onCreate = (event) => {
		event.preventDefault();
		setScreen('create');
	};

	const createEditForm = (key) => {
		const productToEdit = products.find((item) => item.id === key);
		setUpdateProduct(productToEdit);
	};

	const saveNewProduct = (event) => {
		event.preventDefault();
		setProducts([
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
	const editProduct = (event) => {
		event.preventDefault();
		setProducts(updetedProducts);
		setScreen('main');
	};
	const onGoToBasket = (event) => setScreen('cart');

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

	const editProductTitle = (event) => {
		event.preventDefault();
		setNewProductTitle(event.target.value);
	};
	const editProductDescription = (event) => {
		event.preventDefault();
		setNewProductDescription(event.target.value);
	};
	const editProductPrice = (event) => {
		event.preventDefault();
		setNewProductPrice(event.target.value);
	};
	const onPlus = () => setCount(count + 1);
	const onMinus = () => (count >= 1 ? setCount(count - 1) : 1);
	const deleteFromBasket = () => setBasket([]);

	let content;

	switch (screen) {
		case 'main':
			content = (
				<MainView
					products={products}
					onEdit={onEdit}
					onDel={onDel}
					onAdd={onAdd}
					onCreate={onCreate}
					onGoToBasket={onGoToBasket}
				/>
			);
			break;
		case 'edit':
			{
				content = (
					<EditView
						editTitle={editTitle}
						editDescription={editDescription}
						editPrice={editPrice}
						onSave={editProduct}
						onChangeProductTitle={editProductTitle}
						onChangeProductDescription={editProductDescription}
						onChangeProductPrice={editProductPrice}
					/>
				);
			}
			break;
		case 'create':
			{
				content = (
					<CreateView
						onSave={saveNewProduct}
						onCreateProductTitle={onCreateProductTitle}
						onCreateProductDescription={onCreateProductDescription}
						onCreateProductPrice={onCreateProductPrice}
					/>
				);
			}
			break;
		case 'cart': {
			content = (
				<CartView
					basket={basket}
					count={count}
					onPlus={onPlus}
					onMinus={onMinus}
					deleteFromBasket={deleteFromBasket}
				/>
			);
		}
	}

	return <div className='App'>{content}</div>;
};

export default App;
