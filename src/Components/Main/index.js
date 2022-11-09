import React from "react";
import CardItem from "../CardsItem";
import { MainStyle } from "./styles";

export default function Main(props) {
    const { filteredItems , addItem } = props
    return( 
        <MainStyle>
            <>{filteredItems.length === 0 && <p className="empty">Items não encontrado</p>}</>
            {filteredItems.map((i) => (
          <CardItem name={i.name} price={i.preco} image={i.image} amount={i.amount} addItem={addItem}></CardItem>
            ))}
        </MainStyle>
    )
}