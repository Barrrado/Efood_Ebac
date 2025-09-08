import React from 'react'
import {
  Modalfundo,
  Modal,
  ConteudoModal,
  CardP,
  CardP2,
  H2cardmodal,
  Btnadd,
  Btnfechar,
  Fotomodal
} from '../../styles/Modal'
import { useDispatch } from 'react-redux'
import { adicionarAoCarrinho } from '../../store/cart'

function DishDetailsModal({ dish, onClose }) {
  const dispatch = useDispatch()
  if (!dish) {
    return null
  }

  const { nome, preco, descricao, foto, porcao } = dish

  const AdicionarAoCarrinho = () => {
    dispatch(adicionarAoCarrinho(dish))
  }
  return (
    <>
      <Modalfundo onClick={onClose}>
        <Modal>
          <Fotomodal src={foto} alt={nome} />

          <ConteudoModal>
            <Btnfechar onClick={onClose} aria-label="Fechar modal">
              &times;
            </Btnfechar>
            <H2cardmodal>{nome}</H2cardmodal>
            <CardP>{descricao}</CardP>
            <CardP2> Porção: {porcao}</CardP2>

            <Btnadd onClick={AdicionarAoCarrinho}>
              {' '}
              Adicionar ao carrinho - R$ {preco.toFixed(2)}
            </Btnadd>
          </ConteudoModal>
        </Modal>
      </Modalfundo>
    </>
  )
}

export default DishDetailsModal
