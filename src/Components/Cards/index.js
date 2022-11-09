import React from "react";
import { CardStyle } from "./styles";

export default function Cart(props) {
  const { cart, removeItem, totalCart} = props;
  return (
    <CardStyle>
      <p>Carrinho</p>
      <div>{cart.length === 0 && <p className="empty">Carrinho vazio</p>}</div>
        {cart.map((i) => (
          <div className="full">
            <span>{i.amount}</span>
            <span>{i.name}</span>
            <span>{i.price}</span>
            <button onClick={() => removeItem(i)}> remove </button>
          </div>
        ))}
        <p>Total: {totalCart}</p>
    </CardStyle>
  );
}
