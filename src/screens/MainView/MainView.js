import './MainView.css';
import Product from '../../components/Product/Product';
import Button from '../../components/Button/Button';
import Pagination from '../../components/Pagination/Pagination';
import React, { useState, useMemo } from 'react';

const MainView = ({
	products,
	onEdit,
	onDel,
	onAdd,
	onCreate,
	onGoToBasket,
}) => {
	let PageSize = 10;

	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;

		return products.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

	return (
		<div className='wrapper'>
			<div className='productList'>
				{currentTableData.map((product) => (
					<Product
						product={product}
						buttonsClassName='productButtons'
						key={product.id}
						title={product.title}
						description={product.description}
						price={product.price}
						onEdit={(event) => onEdit(event, product.id)}
						onDel={(event) => onDel(event, product.id)}
						onAdd={(event) =>
							!product.isAdd ? onAdd(event, product.id) : null
						}
					/>
				))}
				<Pagination
					currentPage={currentPage}
					totalCount={products.length}
					pageSize={PageSize}
					onPageChange={(page) => setCurrentPage(page)}
				/>
			</div>
			<Button className='buttonCreate' title='Create' onClick={onCreate} />
			<Button className='buttonCreate' title='Basket' onClick={onGoToBasket} />
		</div>
	);
};

export default MainView;
