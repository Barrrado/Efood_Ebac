import styled from 'styled-components'
import Fundo from '../img/Vector.png'
import { Link } from 'react-router'

export const Header = styled.header`
  background-image: url(${Fundo});
  height: 170px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const TextoHeader = styled.h2`
  color: hsla(0, 72%, 65%, 1);
  font-weight: 900;
  font-size: 16px;
  font-family: Roboto;
  text-align: center;
`
export const Logo = styled.img`
  width: 125px;
`
export const Restaurante = styled(Link)`
  color: hsla(0, 72%, 65%, 1);
  font-weight: 900;
  font-size: 16px;
  font-family: Roboto;
  text-align: center;
  text-decoration: none;
`
