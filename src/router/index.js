import {Routes, Route} from 'react-router-dom';
import Liked from '../pages/Liked';
import ProductsPersist from '../pages/Products';
import NotFound from '../pages/NotFound';
import ShoppingCart from '../pages/ShoppingCart';


const RootRouter = () => {
	return (
		<Routes>
			<Route index element={<ProductsPersist/>}/>
			<Route path='/liked/' element={<Liked/>}/>
			<Route path='/product/' element={<ProductsPersist/>}/>
			<Route path='/shopping-cart/' element={<ShoppingCart/>}/>
			<Route path='*' element={<NotFound/>}/>
		</Routes>
	)
}

export default RootRouter