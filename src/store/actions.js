import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {sendRequest} from "../helpers/sendRequest";

export const actionShoppingCartData = createAction('ACTION_SHOPPINGCART_DATA')
export const actionShoppingCart = createAction('ACTION_SHOPPINGCART')
export const actionFavorite = createAction('ACTION_FAVORITE')
export const actionRemoveShoppingCart = createAction('ACTION_REMOVE_ITEM_SHOPPINGCART')
export const actionRemoveFavorite = createAction('ACTION_REMOVE_ITEM_FAVORITE')
export const actionLoader = createAction('ACTION_LOADER')
export const actionUpdatedShoppingCart = createAction('ACTION_UPDATED_SHOPPINGCART')
export const actionUpdatedFavorite = createAction('ACTION_UPDATED_FAVORITE')

export const fetchProducts = createAsyncThunk(
	'products/fetchData',
	async () => {
		const response = await sendRequest(`${window.location.origin}/goodsJson.json`)
		return response
	}
)