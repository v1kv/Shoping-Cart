import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {
	actionFavorite,
	actionShoppingCart,
	actionRemoveFavorite,
	fetchProducts
} from '../../store/actions'
import {selectProductsData,selectFavorite,selectShoppingCart} from '../../store/selectors'

import CardProduct from '../../components/CardProduct'

import './Products.scss'

const Products = () => {
	const dispatch = useDispatch();

	const products = useSelector(selectProductsData);
	const shoppingCarts = useSelector(selectShoppingCart);
	const favorites = useSelector(selectFavorite);

	useEffect(() => () => {
		dispatch(fetchProducts())
	},[])

	const handlerShoppingCart = (item) => () => {

		const isProduct = shoppingCarts.find( product => product.orderNumber === item.orderNumber)

		if (isProduct) {
			return
		}

		dispatch(actionShoppingCart(item))
		localStorage.setItem('shoppingCart',JSON.stringify([...shoppingCarts,item]))
	}

	const handlerFavorite = (product) => () => {

		const isFavorite = favorites.find(favorite => favorite.orderNumber === product.orderNumber)

		if (isFavorite) {
			dispatch(actionRemoveFavorite(product))
			const newFavorites = favorites.filter(item => item.orderNumber !== product.orderNumber)
			localStorage.setItem('favorites',JSON.stringify(newFavorites))
		} else {
			dispatch(actionFavorite(product))
			localStorage.setItem('favorites',JSON.stringify([...favorites,product]))
		}
	}

	const productsMap = products?.map((product,key) => (
		<CardProduct
			key={key}
			picture={product.picture}
			id={product.orderNumber}
			title={product.productName}
			color={product.color}
			price={product.price}
			handlerShoppingCart={handlerShoppingCart(product)}
			handlerFavorite={handlerFavorite(product)}
		/>
	))

	return (
		<div className="container">
			<div className="cards-wrapper">
				{productsMap}
			</div>
		</div>
	);
};

export default Products;
