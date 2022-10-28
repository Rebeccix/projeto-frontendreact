import React from "react";
import Item from "../Item/Item";
import CartStyle from "./style";

function Cart() {
  
  return (
    <CartStyle>
      <div>
        <h1>Itens em meu carrinho</h1>
        <hr />
        <p>Lista de Compras</p>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        <h2>Total: R$ 300</h2>
      </div>
    </CartStyle>
  );
}

export default Cart;
