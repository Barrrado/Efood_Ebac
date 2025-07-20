import React, { useState } from 'react'
import Perfil from '../Perfil/Perfilheader'
import Footer from '../Principalpage/footer'
import {
  ItenCard,
  RestContent,
  Rav,
  Btnadd,
  PCard,
  H4it,
  Containercardipio,
  ConteinerTitulo,
  FotoPrato,
  H6card,
  H1Card
} from '../../styles/Card'

import useFetchRestaurantDetails from '../../hooks/useFetchRestaurantDetail'
import { useParams } from 'react-router-dom'
import DishDetailsModal from '../Perfil/modaldish'

function RestaurantDetailsPage() {
  const { id } = useParams()
  const restaurantId = parseInt(id)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDish, setSelectedDish] = useState(null)

  const { restaurant, loading, error } = useFetchRestaurantDetails(restaurantId)

  const handleOpenModal = (dish) => {
    setSelectedDish(dish)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedDish(null)
  }

  if (loading) {
    return <PCard>Carregando detalhes do restaurante...</PCard>
  }

  if (error) {
    return <PCard>Erro ao carregar detalhes do restaurante: {error}</PCard>
  }

  if (!restaurant) {
    return <PCard>Restaurante não encontrado.</PCard>
  }

  const { titulo, capa, cardapio } = restaurant

  return (
    <>
      <Perfil />
      <Containercardipio>
        <Rav src={capa} alt={titulo} />
        <ConteinerTitulo>
          <H6card>{restaurant.tipo}</H6card>
          <H1Card>{titulo}</H1Card>
        </ConteinerTitulo>
        {cardapio && cardapio.length > 0 ? (
          <RestContent>
            {cardapio.map((item) => (
              <ItenCard key={item.id}>
                <FotoPrato src={item.foto} alt={item.nome} />
                <H4it>{item.nome}</H4it>
                <PCard>{item.descricao}</PCard>
                <Btnadd onClick={() => handleOpenModal(item)}>
                  Saiba mais
                </Btnadd>
              </ItenCard>
            ))}
          </RestContent>
        ) : (
          <PCard>Nenhum item disponível no cardápio.</PCard>
        )}
      </Containercardipio>
      <Footer />

      {isModalOpen && selectedDish && (
        <DishDetailsModal dish={selectedDish} onClose={handleCloseModal} />
      )}
    </>
  )
}

export default RestaurantDetailsPage
