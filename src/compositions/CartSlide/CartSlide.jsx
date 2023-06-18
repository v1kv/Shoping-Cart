import cx from 'classnames';
import {Link} from 'react-router-dom'
import EmptyCart from "./EmptyCart";
import CardShoppingCart from "../../components/CardShoppingCart";

import {useSelector} from 'react-redux';
import {selectShoppingCart} from '../../store/selectors'

import './CartSlide.scss'

const CartSlide = ({onHide, isShow}) => {

	const cartArray = useSelector(selectShoppingCart)

	const cartHandler = (e) => {
		if (!e.target.closest('.side__card-box')){
			onHide()
		}
	}

	const isCartArray = cartArray.length === 0

	return (
		<>
			{isShow && (
				<div className={cx("side-overlay", {'cart-slide-overlay': isShow})} onClick={cartHandler}>
					{isShow && (<div className="side__close-overlay" />)}
					<div className="side__card-box">
						<div className="cart-top">
							<div className="col-xl-24">
								<i className="g-close _s-close slide-close"></i>
							</div>
							<div className="cart-top-title">
								My Cart
							</div>
						</div>
						<div className="cart-body">
							{isCartArray && <EmptyCart/>}
							{
								!isCartArray && cartArray.map((item,index) => <CardShoppingCart key={index} title={item.productName} price={item.price} product={item} />)
							}
						</div>
						<div className="cart-footer">
							<Link to="/shopping-cart" onClick={onHide} className="btn btn-primary">Корзина</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default CartSlide;
