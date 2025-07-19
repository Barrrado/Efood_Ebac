import React from 'react'

import '../Perfil/cardapio.css'

function DishDetailsModal({ dish, onClose }) {
  if (!dish) {
    return null
  }

  const { nome, preco, descricao, foto, porcao } = dish

  return (
    <>
      <div className="modalfundo" onClick={onClose}>
        <div className="modal">
          <img className="fotomodal" src={foto} alt={nome} />

          <div className="ConteudoModal">
            <button
              className="btnfechar"
              onClick={onClose}
              aria-label="Fechar modal"
            >
              &times;
            </button>
            <h2 className="h2cardmodal">{nome}</h2>
            <p className="cardP">{descricao}</p>
            <p className="cardP2"> Porção: {porcao}</p>

            <button className="btnadd">
              Adicionar ao carrinho - R$ {preco.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DishDetailsModal
