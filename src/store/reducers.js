import {createReducer,isAsyncThunkAction} from "@reduxjs/toolkit";
import * as actions from './actions'

const initialState = {
	data: [],
	shoppingCart: [],
	favorite: [],
	loader: true,
}

export default createReducer(initialState, (builder) => {
	builder
		.addCase(actions.actionShoppingCartData, (state, {payload}) => {
			state.data = [...payload];
		})
		.addCase(actions.actionShoppingCart, (state, {payload}) => {
			state.shoppingCart = [...state.shoppingCart, payload];
		})
		.addCase(actions.actionFavorite, (state, {payload}) => {
			state.favorite = [...state.favorite, payload];
		})
		.addCase(actions.actionUpdatedShoppingCart, (state, {payload}) => {
			state.shoppingCart = [...payload];
		})
		.addCase(actions.actionUpdatedFavorite, (state, {payload}) => {
			state.favorite = [...payload];
		})
		.addCase(actions.actionRemoveShoppingCart, (state, {payload}) => {
			state.shoppingCart = state.shoppingCart.filter(item => item.orderNumber !== payload.orderNumber);
		})
		.addCase(actions.actionRemoveFavorite, (state, {payload}) => {
			state.favorite = state.favorite.filter(item => item.orderNumber !== payload.orderNumber);
		})
		.addCase(actions.actionLoader, (state, {payload}) => {
			state.loader = payload;
		})
		.addMatcher(isAsyncThunkAction(actions.fetchProducts),(state, {payload}) => {
			state.data = payload;
			state.loader = false;
		});
})