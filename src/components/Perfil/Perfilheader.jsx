import React from 'react'
import logo from '../../img/logo.png'
import { Header, Logo, Restaurante, TextoHeader } from '../../styles/PerfilHead'

function PerfilH() {
  return (
    <>
      <Header>
        <Restaurante to="/">Restaurantes</Restaurante>
        <Logo src={logo} alt="Logo" />
        <TextoHeader> 0 itens no Carrinho</TextoHeader>
      </Header>
    </>
  )
}
export default PerfilH
