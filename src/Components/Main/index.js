import React from "react";
import CardItem from "../CardsItem";
import { MainStyle } from "./styles";

export default function Main(props) {
    const { items, addItem } = props
    return( 
        <MainStyle>
            {items.map((i) => (
          <CardItem name={i.name} price={i.preco} image={i.image} amount={i.amount} addItem={addItem}></CardItem>
            ))}
        </MainStyle>
    )
}