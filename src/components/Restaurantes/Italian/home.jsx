import React from 'react'
import Perfil from '../../Perfil/Perfilheader'
import Footer from '../../footer'
import {
  PerfilContent,
  CabeçalhoContent,
  TituloHome,
  Texto,
  ItenCard,
  RestContent,
  Rav,
  Btnadd,
  Pitalia,
  H3it,
  H4it
} from '../../../styles/estilositalian'
import Ravioli from '../Italian/1.webp'
import Spaghetti from '../Italian/2.jpg'
import Risotto from '../Italian/3.jpg'

function Home() {
  return (
    <>
      <Perfil />
      <PerfilContent>
        <CabeçalhoContent>
          <Texto>
            <H3it>Italiana</H3it>
            <TituloHome> Bem-vindo à página Italiana!</TituloHome>
          </Texto>
        </CabeçalhoContent>
        <RestContent>
          <ItenCard gridColumn="1" gridRow="1">
            <Rav src={Ravioli} alt="" />
            <H4it>Ravioli al Tartufo Nero</H4it>
            <Pitalia>
              O Ravioli al Tartufo Nero é um requintado prato de massa
              artesanal, que celebra os sabores ricos e terrosos da trufa negra
              italiana.
            </Pitalia>
            <Btnadd>Adicionar ao carrinho</Btnadd>
          </ItenCard>
          <ItenCard ItenCard gridColumn="2">
            <Rav src={Spaghetti} alt="" />
            <H4it>Spaghetti alla Carbonara</H4it>
            <Pitalia>
              O Spaghetti alla Carbonara é um clássico prato italiano, feito com
              massa spaghetti al dente, coberto com um molho rico e cremoso à
              base de ovos, queijo pecorino romano, pancetta e pimenta-do-reino.
            </Pitalia>
            <Btnadd> Adicionar ao carrinho</Btnadd>
          </ItenCard>
          <ItenCard ItenCard gridColumn="3">
            <Rav src={Risotto} alt="" />
            <H4it>Risotto ai Funghi Porcini</H4it>
            <Pitalia>
              O Risotto ai Funghi Porcini é uma iguaria italiana feita com arroz
              Arborio de alta qualidade e cogumelos porcini secos, que são
              reidratados para liberar seu sabor intenso e terroso.
            </Pitalia>
            <Btnadd>Adicionar ao carrinho</Btnadd>
          </ItenCard>
        </RestContent>
      </PerfilContent>
      <Footer />
    </>
  )
}

export default Home
