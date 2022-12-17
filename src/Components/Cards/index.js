import React from "react";
import { CardStyle } from "./styles";

export default function Cart(props) {
  const { cart, removeItem, totalCart, removeTodosItems, toggleCart} = props;
  return (
    <CardStyle toggleCart={toggleCart}>
      <div>

      <p>Carrinho</p>
      <div>{cart.length === 0 && <p className="empty">Carrinho vazio</p>}</div>
        {cart.map((i) => (
          <div key={i.id} className="full">
            <span>{i.amount}x</span>
            <span>{i.name}</span>
            <span>{i.price}</span>
            <button onClick={() => removeItem(i)}> remove </button>
          </div>
        ))}
        <button onClick={() => removeTodosItems()}>Remover carrinho</button>
        <p>Total: {totalCart}</p>
        </div>
    </CardStyle>
  );
}
