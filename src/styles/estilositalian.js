import styled from 'styled-components'
import capa from '../components/Restaurantes/Italian/capa.jpeg'

export const PerfilContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CabeçalhoContent = styled.div`
  background-image: url(${capa});
  width: 100%;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -414px;
  color: aliceblue;
`
export const TituloHome = styled.h2`
  color: rgb(255, 255, 255);
  font-family: Roboto;
  margin-top: 80px;
`
export const Texto = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
export const ItenCard = styled.div`
  width: 330px;
  height: 340px;
  border: 2px solid hsla(0, 72%, 65%, 1);
  color: aliceblue;
  background-color: hsla(0, 72%, 65%, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
`
export const RestContent = styled.div`
  display: grid;
  grid-gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
`
export const Rav = styled.img`
  width: 320px;
  height: 167px;
  padding: 5px;
`
export const Btnadd = styled.button`
  width: 96%;
  background-color: antiquewhite;
  border: 0;
  color: hsla(0, 72%, 65%, 1);
  font-weight: 700;
  font-family: roboto;
  margin: 5px;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    color: aliceblue;
    background-color: rgb(114, 40, 40);
  }
`
export const Pitalia = styled.p`
  font-size: 13px;
  padding: 5px;
  color: hsla(28, 100%, 93%, 1);
`
export const H3it = styled.h3`
  font-family: Roboto;
  font-weight: 100;
`
export const H4it = styled.h4`
  margin: 0;
  color: hsla(28, 100%, 93%, 1);
  padding: 5px;
`
