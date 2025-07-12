import React from 'react'
import logo from '../../components/Perfil/imgPerfil/logo.png'

import { Header, Logo, TextoHeader } from '../../styles/header'

function Cabeçalho() {
  return (
    <>
      <Header>
        <Logo src={logo} alt="Logo" />
        <TextoHeader>
          Viva Experiencias Gastrononicas no conforto da sua casa{' '}
        </TextoHeader>
      </Header>
    </>
  )
}
export default Cabeçalho
