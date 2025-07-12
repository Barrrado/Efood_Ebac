import React from 'react'
import Perfil from '../../Perfil/Perfilheader'
import Footer from '../../Principalpage/footer'
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
import Ravioli from '../../../img/arabe/1.jpg'
import Spaghetti from '../../../img/arabe/2.jpg'
import Risotto from '../../../img/arabe/3.webp'

function Homepizza() {
  return (
    <>
      <Perfil />
      <PerfilContent>
        <CabeçalhoContent>
          <Texto>
            <H3it>PIzzas Bar</H3it>
            <TituloHome> Bem-vindo à página Pizza Bar!</TituloHome>
          </Texto>
        </CabeçalhoContent>
        <RestContent>
          <ItenCard gridColumn="1" gridRow="1">
            <Rav src={Ravioli} alt="" />
            <H4it>Mezze Platter</H4it>
            <Pitalia>
              O Mezze Platter é uma seleção de aperitivos tradicionais árabes,
              incluindo homus, babaganush, tabule, falafel, azeitonas e pão pita
              fresco
            </Pitalia>
            <Btnadd>Adicionar ao carrinho</Btnadd>
          </ItenCard>
          <ItenCard ItenCard gridColumn="2">
            <Rav src={Spaghetti} alt="" />
            <H4it>Kebab de cordeiro</H4it>
            <Pitalia>
              O Kebab de Cordeiro é feito com pedaços de cordeiro marinados em
              especiarias e ervas, grelhados à perfeição e servidos com arroz
              basmati perfumado, salada e molho de iogurte.
            </Pitalia>
            <Btnadd> Adicionar ao carrinho</Btnadd>
          </ItenCard>
          <ItenCard ItenCard gridColumn="3">
            <Rav src={Risotto} alt="" />
            <H4it>Shawarma de Frango</H4it>
            <Pitalia>
              O Shawarma de Frango é preparado com finas fatias de frango
              marinadas em uma mistura de especiarias e grelhadas lentamente.
            </Pitalia>
            <Btnadd>Adicionar ao carrinho</Btnadd>
          </ItenCard>
        </RestContent>
      </PerfilContent>
      <Footer />
    </>
  )
}

export default Homepizza
