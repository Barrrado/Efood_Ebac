import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removerDoCarrinho, removerItemCompletamente } from '../../store/cart'
import lixeira from '../../img/c2510f15841e4855c13cfe444448798eeb37c734.png'
import {
  CartDiv,
  CartModal,
  ConteinerCart,
  BtnCart,
  BtnLixo,
  TextCard,
  TextCart2,
  Total,
  ListaCart,
  Lixeira,
  ListaCarrinho,
  ImgFoto,
  CartTexto
} from '../../styles/Cart'

const Carrinho = ({ onClose }) => {
  const itens = useSelector((state) => state.carrinho.itens)
  const dispatch = useDispatch()

  const handleRemoverDoCarrinho = (id) => {
    dispatch(removerDoCarrinho(id))
  }
  const total = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  )
    const ClickCart = (e) => {
    e.stopPropagation()
  }


  return (
    <CartModal onClick={onClose}>
        <CartDiv onClick={ClickCart}>
        {itens.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ListaCarrinho>
            {itens.map((item) => (
              <ListaCart key={item.id}>
                <ConteinerCart>
                  <ImgFoto src={item.foto} alt="" />
                  <CartTexto>
                    <TextCard>
                      {item.nome}
                      {item.quantidade > 1 && ` (${item.quantidade}x)`}
                    </TextCard>
                    <TextCart2>
                      R$ {(item.preco * item.quantidade).toFixed(2)}
                    </TextCart2>
                  </CartTexto>
                  <BtnLixo onClick={() => handleRemoverDoCarrinho(item.id)}>
                    <Lixeira src={lixeira} alt="" />
                  </BtnLixo>
                </ConteinerCart>
              </ListaCart>
            ))}
          </ListaCarrinho>
        )}
        <Total>
          <h4>Valor total:</h4>
          <h4>R${total.toFixed(2)}</h4>
        </Total>

        <BtnCart>CONTINUAR PARA ENTREGA</BtnCart>
      </CartDiv>
    </CartModal>
  )
}

export default Carrinho
