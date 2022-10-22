import styled from "styled-components";

const ProductsStyle = styled.article`
    display: grid;
    grid-template-rows: 40% 30% 30%;
    grid-template-columns: 20% 1fr;
    grid-template-areas: 
    "header header"
    "side main"
    "side footer";
    background-color: aliceblue;
    width: 45%;
    margin: 0 5px 10px 5px;

    img:first-of-type {
        width: 100%;
        grid-area: header;
    }

    img:last-of-type {
        margin-top: 10px;
        justify-self: center;
        width: 20px;
        grid-area: side;
        cursor: pointer;
    }

    p:first-of-type {
        grid-area: main;
        font-size: 1rem;
        margin: 10px 0 10px 0;
    }

    p:last-of-type {
        margin: 0 0 10px 0;
        grid-area: footer;
        font-size: 1rem;
    }
`

export default ProductsStyle