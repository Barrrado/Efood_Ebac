import React from 'react'
import capa from '../img/capa.jpeg'
import capa1 from '../img/capa1.jpeg'
import capa2 from '../img/capa2.png'
import capa3 from '../img/capa3.jpeg'
import capa4 from '../img/capa4.jpeg'
import capa5 from '../img/capa5.png'
import estrela from '../img/estrela.png'
import {
  Conteiner,
  ImgCard,
  Card,
  CorpoCard,
  Destaque,
  Btn,
  Semana,
  Estrela,
  TituloSecun,
  Pcard,
  Nota,
  BtnLink,
  Notatitulo
} from '../styles/main'

function Main() {
  return (
    <>
      <Conteiner>
        <Card gridColumn="1" gridRow="1">
          <ImgCard src={capa} alt="Img Restaurante" />
          <CorpoCard>
            <Destaque>
              <Semana>Destaque da Semana</Semana>
              <Semana>Italiana</Semana>
            </Destaque>
            <TituloSecun>
              <Notatitulo>Cerca Trova</Notatitulo>
              <Nota>
                <Notatitulo>4.7</Notatitulo>
                <Estrela src={estrela} alt="Estrela" />
              </Nota>
            </TituloSecun>
            <Pcard>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              ab ut laboriosam animi architecto cum consectetur culpa impedit
              voluptatem perspiciatis rerum nostrum excepturi obcaecati, quod at
              reprehenderit laudantium expedita laborum!
            </Pcard>
            <BtnLink to="/home">Saiba Mais</BtnLink>
          </CorpoCard>
        </Card>
        <Card gridColumn="2" gridRow="1">
          <ImgCard src={capa1} alt="" />
          <CorpoCard>
            <Destaque>
              <Semana>Arabe</Semana>
            </Destaque>
            <TituloSecun>
              <Notatitulo>alSim</Notatitulo>
              <Nota>
                <Notatitulo>4.7</Notatitulo>
                <Estrela src={estrela} alt="Estrela" />
              </Nota>
            </TituloSecun>
            <Pcard>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              ab ut laboriosam animi architecto cum consectetur culpa impedit
              voluptatem perspiciatis rerum nostrum excepturi obcaecati, quod at
              reprehenderit laudantium expedita laborum!
            </Pcard>
            <BtnLink to="/home/2">Saiba Mais</BtnLink>
          </CorpoCard>
        </Card>
        <Card gridColumn="2" gridRow="2">
          <ImgCard src={capa2} alt="" />
          <CorpoCard>
            <Destaque>
              <Semana>Vegana</Semana>
            </Destaque>
            <TituloSecun>
              <Notatitulo>Gostinho da terra</Notatitulo>
              <Nota>
                <Notatitulo>4.7</Notatitulo>
                <Estrela src={estrela} alt="Estrela" />
              </Nota>
            </TituloSecun>
            <Pcard>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              ab ut laboriosam animi architecto cum consectetur culpa impedit
              voluptatem perspiciatis rerum nostrum excepturi obcaecati, quod at
              reprehenderit laudantium expedita laborum!
            </Pcard>
            <Btn>Saiba Mais</Btn>
          </CorpoCard>
        </Card>
        <Card gridColumn="1" gridRow="2">
          <ImgCard src={capa3} alt="" />
          <CorpoCard>
            <Destaque>
              <Semana>Japonesa</Semana>
            </Destaque>
            <TituloSecun>
              <Notatitulo>Niko shushi-bar</Notatitulo>
              <Nota>
                <Notatitulo>4.7</Notatitulo>
                <img src={estrela} alt="" className="estrela" />
              </Nota>
            </TituloSecun>
            <Pcard>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              ab ut laboriosam animi architecto cum consectetur culpa impedit
              voluptatem perspiciatis rerum nostrum excepturi obcaecati, quod at
              reprehenderit laudantium expedita laborum!
            </Pcard>
            <Btn>Saiba Mais</Btn>
          </CorpoCard>
        </Card>
        <Card gridColumn="1" gridRow="3">
          <ImgCard src={capa4} alt="" />
          <CorpoCard>
            <Destaque>
              <Semana>Portuguesa</Semana>
            </Destaque>
            <TituloSecun>
              <Notatitulo>Cantinho Lusitano</Notatitulo>
              <Nota>
                <Notatitulo>4.7</Notatitulo>
                <Estrela src={estrela} alt="Estrela" />
              </Nota>
            </TituloSecun>
            <Pcard>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              ab ut laboriosam animi architecto cum consectetur culpa impedit
              voluptatem perspiciatis rerum nostrum excepturi obcaecati, quod at
              reprehenderit laudantium expedita laborum!
            </Pcard>
            <Btn>Saiba Mais</Btn>
          </CorpoCard>
        </Card>
        <Card gridColumn="2" gridRow="3">
          <ImgCard src={capa5} alt="" />
          <CorpoCard>
            <Destaque>
              <Semana>Pizzas</Semana>
            </Destaque>
            <TituloSecun>
              <Notatitulo>Le Parma</Notatitulo>
              <Nota>
                <Notatitulo>4.7</Notatitulo>
                <Estrela src={estrela} alt="Estrela" />
              </Nota>
            </TituloSecun>
            <Pcard>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              ab ut laboriosam animi architecto cum consectetur culpa impedit
              voluptatem perspiciatis rerum nostrum excepturi obcaecati, quod at
              reprehenderit laudantium expedita laborum!
            </Pcard>
            <Btn>Saiba Mais</Btn>
          </CorpoCard>
        </Card>
      </Conteiner>
    </>
  )
}
export default Main
