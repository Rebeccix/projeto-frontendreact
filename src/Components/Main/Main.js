import React from "react";
import Products from "../Products/Products";
import MainStyle from "./style";

function Main(props) {

  const list = props.obj.map((index) => 
    <Products cart={props.cart} useCart={props.useCart} name={index.nome} preco={index.preco}/>
  );

  return <MainStyle>{list}</MainStyle>;
}

export default Main;
