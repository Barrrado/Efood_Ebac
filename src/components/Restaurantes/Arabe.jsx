import React from 'react'
import Perfil from '../Perfil/Perfilheader'
import Footer from '../footer'
import { PerfilContent } from '../../styles/estilositalian'

function Arabe() {
  return (
    <>
      <Perfil />
      <PerfilContent>
        <h2>Página Inicial</h2>
        <p>Bem-vindo à página Arabe!</p>
      </PerfilContent>
      <Footer />
    </>
  )
}

export default Arabe
