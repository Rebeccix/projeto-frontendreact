import React from "react";
import ProductsStyle from "./style"; 

function Products(props) {
    console.log(props.num)
    return (
        <ProductsStyle>
            <img src="https://picsum.photos/100/100" alt="" />
            <img src="favorite.png" alt="" />
            <p>{props.name}{props.num}</p>
            <p>Preço R$ {props.preco}</p>
        </ProductsStyle>
    )
}

export default Products