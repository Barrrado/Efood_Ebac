import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { restaurantsApi } from '../service/restaurantsApi'
import carrinhoReducer from '../store/cart'

export const store = configureStore({
  reducer: {
    [restaurantsApi.reducerPath]: restaurantsApi.reducer,
    carrinho: carrinhoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurantsApi.middleware)
})

setupListeners(store.dispatch)
