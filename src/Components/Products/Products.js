import React from "react";
import ProductsStyle from "./style"; 

function Products(props) { 
    
    // const target = (e) => {
    //     console.log(e.target)
    //     props.useCart([{
    //         ...props.cart,
    //     },
    //     {
    //         nome: {name},
    //         preco: {preco}
    //     }])
    // }

    return (
        <ProductsStyle nome={props.name}>
            <img src="https://picsum.photos/100/100" alt="" />
            <img src="favorite.png" alt="" />
            <p>{props.name}</p>
            <p>Preço R$ {props.preco}</p>
            <button cart={props.cart} onClick={target}>Adicionar item</button>
        </ProductsStyle>
    )
}

export default Products