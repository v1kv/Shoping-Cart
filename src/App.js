import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { selectFavorite, selectShoppingCart } from './store/selectors'
import {
  actionUpdatedFavorite,
  actionUpdatedShoppingCart,
  fetchProducts,
} from './store/actions'

import Header from './compositions/Header'
import Footer from './compositions/Footer'
import Portal from './components/Portal'
import CartSlide from './compositions/CartSlide'

import RootRouter from './router'

import './styles/styles.scss'

function App() {
  const [isShowCart, setIsShowCart] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleShowCart = () => {
    setIsShowCart(true)
  }

  const handleHideCart = () => {
    setIsShowCart(false)
  }

  const handleFavorites = () => {
    navigate('/liked')
  }

  const shoppingCarts = useSelector(selectShoppingCart)
  const favorites = useSelector(selectFavorite)

  const favoritesLocalStorage =
    JSON.parse(localStorage.getItem('favorites')) || []
  const shoppingCartLocalStorage =
    JSON.parse(localStorage.getItem('shoppingCart')) || []

  useEffect(
    () => () => {
      dispatch(fetchProducts())

      if (shoppingCartLocalStorage.length > 0 && shoppingCarts.length === 0) {
        dispatch(actionUpdatedShoppingCart(shoppingCartLocalStorage))
      }
      if (favoritesLocalStorage.length > 0 && favorites.length === 0) {
        dispatch(actionUpdatedFavorite(favoritesLocalStorage))
      }
    },
    [],
  )

  return (
    <div className="page__wrapper">
      <Header showCart={handleShowCart} showFavorites={handleFavorites} />
      <main className="main">
        <RootRouter />
      </main>
      <Footer />
      <Portal id="portal">
        <CartSlide isShow={isShowCart} onHide={handleHideCart} />
      </Portal>
    </div>
  )
}

export default App
