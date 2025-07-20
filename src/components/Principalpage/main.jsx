import React from 'react'
import { Conteiner } from '../../styles/main'
import useFetchRestaurants from '../../hooks/useFetchRestaurants'
import RestaurantCard from '../Cards/RestaurantCard'

function Main() {
  const { restaurants, loading, error } = useFetchRestaurants()

  if (loading) {
    return <p>Carregando restaurantes...</p>
  }

  if (error) {
    return <p>Erro ao carregar restaurantes: {error}</p>
  }

  if (restaurants.length === 0) {
    return <p>Nenhum restaurante encontrado.</p>
  }

  return (
    <>
      <Conteiner>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </Conteiner>
    </>
  )
}

export default Main
