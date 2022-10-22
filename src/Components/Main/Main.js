import React from "react";
import Products from "../Products/Products";
import MainStyle from "./style";

function Main() {
  const produtos = [
    {
      nome: "skate",
      preco: 100,
    },
    {
      nome: "bike",
      preco: 200,
    },
    {
      nome: "carro",
      preco: 300
    }
  ];

  const list = produtos.map((index) => 
    <Products name={index.nome} preco={index.preco}/>
  );

  console.log(list);

  return <MainStyle>{list}</MainStyle>;
}

export default Main;
