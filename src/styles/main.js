import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Conteiner = styled.div`
  max-width: 1024px;
  height: 1290px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  background-color: rgb(255, 246, 239);
  margin: 0 auto;
  justify-items: center;
  align-items: center;
`
export const ImgCard = styled.img`
  object-fit: cover;
  height: 217px;
  width: 472px;
`
export const Card = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 472px;
  height: 398px;
  border: 1px solid hsla(0, 72%, 65%, 1);
  background: hsla(0, 0%, 100%, 1);

  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
`
export const CorpoCard = styled.div`
  height: 181px;
  position: relative;
  bottom: 41px;
`
export const Destaque = styled.div`
  position: relative;
  display: flex;
  bottom: 177px;
  justify-content: flex-end;
  color: rgb(255, 255, 255);
`
export const Btn = styled.button`
  color:hsla(28, 100%, 93%, 1);
  background-color: hsla(0, 72%, 65%, 1);
  border: 0;
  padding: 3px;
  margin-left: 10px;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 700;
  margin-bottom: 10px;
  cursor: pointer;
  border: 2px solid hsla(0, 72%, 65%, 1);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgb(255, 255, 255);
    color: hsla(0, 72%, 65%, 1);
    border: 2px solid hsla(0, 72%, 65%, 1);
  }
`
export const Semana = styled.h2`
  margin: 5px;
  font-size: 12px;
  background-color: hsla(0, 72%, 65%, 1);
  padding: 5px;
`
export const TituloSecun = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  color: hsla(0, 72%, 65%, 1);
  height: 26px;
`
export const Pcard = styled.p`
  margin: 15px;
  line-height: 22px;
  font-size: 14px;
  color: hsla(0, 72%, 65%, 1);
  font-family: Roboto;
  font-weight: 400;
`
export const Nota = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  padding: 2px;
  margin: 5px;
  width: 49px;
`
export const Estrela = styled.img`
  width: 20px;
  margin: 10px;
`
export const BtnLink = styled(Link)`
    color:hsla(28, 100%, 93%, 1);
  background-color: hsla(0, 72%, 65%, 1);
  border: 0;
  padding: 3px;
  margin-left: 10px;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 700;
  margin-bottom: 10px;
  cursor: pointer;
  border: 2px solid hsla(0, 72%, 65%, 1);
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: rgb(255, 255, 255);
    color: hsla(0, 72%, 65%, 1);
    border: 2px solid hsla(0, 72%, 65%, 1);
  }
`
export const Notatitulo = styled.h2`
  font-family: Roboto;
    color: hsla(0, 72%, 65%, 1);
 font-size: 20px;
   font-weight: 700;
`
