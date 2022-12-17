import React from "react";
import { CardItemStyle } from "./styles";

export default function CardItem(props) {  
  const { name, price, image, addItem } = props
  return (
    <CardItemStyle>
      <div>
          <img src={image} alt="" onClick={() => addItem(props)}/>
        <h1>{name}</h1> 
        <p>R$ {price}</p>
      </div>
      <button onClick={() => addItem(props)}>Add Carrinho</button>
    </CardItemStyle>
  );
}