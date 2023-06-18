import {useSelector} from "react-redux";
import cx from 'classnames'
import './CardProduct.scss'
import {selectFavorite} from "../../store/selectors";

const CardProduct = ({picture, title, price, color, id, handlerShoppingCart, handlerFavorite, handlerRemove}) => {
	const favorites = useSelector(selectFavorite)

	const isFavorite = favorites?.find(item => item.orderNumber === id)

	return (
		<div className="g-card">
			<div className="card-box">
				<div className="card-header">
					<img src={picture} className="card-img-top" alt={title}/>
				</div>
				<div className="card-body">
					<div className="card-info">
						<div className="card-title">
							{title}
						</div>

						<div className="card-price">
							${price}
						</div>
						<div className="card-color" style={{backgroundColor: color}}></div>
					</div>

				</div>
				<div className="card-footer">
					{handlerShoppingCart && (
						<button type="button" className="btn btn-outline-primary" onClick={handlerShoppingCart}>
							Купить
						</button>
					)}
					{handlerFavorite && (
						<button type="button" className={cx("btn btn-outline-primary", {active: isFavorite})}
						        onClick={handlerFavorite}>
							Нравиться
						</button>
					)}
					{handlerRemove && (
						<button type="button" className={cx("btn btn-outline-primary")}
						        onClick={handlerRemove}>
							Удалить
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default CardProduct;
