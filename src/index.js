import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RestaurantDetailsPage from './components/Cards/RestaurantCardapio'
import { Globalstyle } from './styles/Globalstyle'
import { Provider } from 'react-redux'
import { store, cart } from '../src/store/store'
import Carrinho from '../src/components/cart/Carrinho'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/home/:id',
    element: <RestaurantDetailsPage />
  },
  {
    path: '/carrinho',
    element: <Carrinho />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Globalstyle />
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
