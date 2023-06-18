import { useSelector, useDispatch } from 'react-redux'

import Empty from './Empty'

import { selectFavorite } from '../../store/selectors'
import CardProduct from '../../components/CardProduct'
import * as actions from '../../store/actions'

const Liked = () => {
  const dispatch = useDispatch()
  const favorites = useSelector(selectFavorite)

  const isFavorite = favorites.length === 0

  const handlerRemove = (product) => {
    const isFavorite = favorites.find(
      (favorite) => favorite.orderNumber === product.orderNumber,
    )

    if (isFavorite) {
      dispatch(actions.actionRemoveFavorite(product))
      const newFavorites = favorites.filter(
        (item) => item.orderNumber !== product.orderNumber,
      )
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
    } else {
      dispatch(actions.actionFavorite(product))
      localStorage.setItem('favorites', JSON.stringify([...favorites, product]))
    }
  }

  const favoritesMap = favorites?.map((product, key) => (
    <CardProduct
      key={key}
      picture={product.picture}
      id={product.orderNumber}
      title={product.productName}
      color={product.color}
      price={product.price}
      handlerRemove={() => handlerRemove(product)}
    />
  ))
  return (
    <div className="container">
      {isFavorite && <Empty />}
      {!isFavorite && <div className="cards-wrapper">{favoritesMap}</div>}
    </div>
  )
}

export default Liked
