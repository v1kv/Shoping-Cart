import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/actions'
import {selectShoppingCart} from "../../store/selectors";

import {ReactComponent as Remove} from './images/close.svg';

import './CardShoppingCart.scss'

const CardShoppingCart = ({title, price, product}) => {
	const dispatch = useDispatch();
	const shoppingCart = useSelector(selectShoppingCart);

	const handlerDel = (id) => {
		dispatch(actions.actionRemoveShoppingCart(id))

		const newShoppingCart = shoppingCart.filter(item => item.orderNumber !== id.orderNumber)
		localStorage.setItem('shoppingCart', JSON.stringify(newShoppingCart))
	}

	return (
		<div className="card-shopping-cart">
			<div className="card-action">
				<button type="button" className="btn-remove" onClick={() => handlerDel(product)}>
					<Remove/>
				</button>
			</div>
			<div className="card-body">
				<div className="card-title">{title}</div>
				<div className="card-price">
					<p className="price">${price}</p>
				</div>
			</div>
		</div>
	);
};

export default CardShoppingCart;
