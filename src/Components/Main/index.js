import React from "react";
import CardItem from "../CardsItem";
import { MainStyle, ContainerMain } from "./styles";

export default function Main(props) {
  const { sortItemsPrice, items, addItem, filterMin, filterMax, filterName } = props;
  return (
    <MainStyle>
      <ContainerMain>
        <>
          {items.length === 0 && <p className="empty">Items não encontrado</p>}
        </>
        {items
          .sort((a, b) => {
            if (sortItemsPrice === 1) {
              return a.preco > b.preco ? 1 : -1;
            } else if (sortItemsPrice === 2) {
              return a.preco > b.preco ? -1 : 1;
            } else {
              return 0;
            }
          })
          .filter((item) => {
            return filterMin ? item.preco >= filterMin : item;
          })
          .filter((item) => {
            return filterMax ? item.preco <= filterMax : item;
          })
          .filter((item) => {
            return item.name.toLowerCase().includes(filterName.toLowerCase());
          })
          .map((i) => (
            <CardItem
              key={i.id}
              id={i.id}
              name={i.name}
              price={i.preco}
              image={i.image}
              amount={i.amount}
              addItem={addItem}
            ></CardItem>
          ))}
      </ContainerMain>
    </MainStyle>
  );
}
