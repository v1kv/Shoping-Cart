import {useDispatch, useSelector} from "react-redux";
import {selectShoppingCart} from "../../store/selectors";
import EmptyCart from "../../compositions/CartSlide/EmptyCart";
import CardProduct from '../../components/CardProduct'
import {actionRemoveShoppingCart} from "../../store/actions";

const ShoppingCart = () => {
	const dispatch = useDispatch()
	const shoppingCart = useSelector(selectShoppingCart);

	const isShoppingCart = shoppingCart.length === 0

	const handlerDel = (id) => {
		dispatch(actionRemoveShoppingCart(id))

		const newShoppingCart = shoppingCart.filter(item => item.orderNumber !== id.orderNumber)
		localStorage.setItem('shoppingCart',JSON.stringify(newShoppingCart))
	}

	const productsMap = shoppingCart?.map((product, key) => (
		<CardProduct
			key={key}
			picture={product.picture}
			id={product.orderNumber}
			title={product.productName}
			color={product.color}
			price={product.price}
			handlerRemove={() => handlerDel(product)}
		/>
	))

	return (
		<div className="container">
			{isShoppingCart && <EmptyCart/>}
			{
				!isShoppingCart && (<div className="cards-wrapper">{productsMap}</div>)
			}
		</div>
	);
};

export default ShoppingCart;
