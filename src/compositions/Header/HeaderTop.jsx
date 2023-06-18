import React from 'react';
import {useSelector} from "react-redux";

import ButtonText from "../../components/ButtonText";
import {selectShoppingCart, selectFavorite} from "../../store/selectors";

import {ReactComponent as Favorites} from './images/favorites.svg'
import {ReactComponent as Cart} from './images/cart.svg'

const HeaderTop = ({showCart,showFavorites}) => {
	const cartArray = useSelector(selectShoppingCart)
	const favoritesArray = useSelector(selectFavorite)

	return (
		<div className="header-top px-md-4">
			<ButtonText className="btn-favorite">
				<div className="header-icon" onClick={showFavorites}>
					<Favorites className="icon-favorites"/>
					<span className="header-label">{favoritesArray.length}</span>
				</div>
			</ButtonText>
			<ButtonText className="btn-cart">
				<div className="header-icon" onClick={showCart}>
					<Cart className="icon-cart"/>
					<span className="header-label">{cartArray.length}</span>
				</div>
			</ButtonText>
		</div>
	);
};

export default HeaderTop;
