import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Restaurantes/Italian/home'
import Arabe from '../src/components/Restaurantes/Arabe/Arabe'
import Japonesa from '../src/components/Restaurantes/japonesa/japonesa'
import Lusitano from './components/Restaurantes/lusitano/lusitano'
import Pizza from './components/Restaurantes/pizza/pizza'
import Vegano from './components/Restaurantes/Vegano/vegano'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/home/:id',
    element: <Arabe />
  },
  {
    path: 'home/3',
    element: <Japonesa />
  },
  {
    path: 'home/4',
    element: <Lusitano />
  },
  {
    path: 'home/5',
    element: <Pizza />
  },
  {
    path: 'home/6',
    element: <Vegano />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
