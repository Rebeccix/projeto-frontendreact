import styled from "styled-components";

const CartStyle = styled.div`
    position: fixed;
    left: 0;
    top: 50px;
    display: flex;
    justify-content: center !important;
    width: 100%;

    div { 
        width: 90%;
        background-color: lightblue;
        display: flex;
        flex-direction: column;
        align-items: flex-start !important;
        padding: 10px 10px 10px 10px;
        border-radius: 10px;
    }

    h1 {
        align-self: center;
        font-size: 1.5rem;
    }
    
    hr {
        margin: 5px 0 5px 0;
        color: black;
        width: 100%;
        font-weight: bold;
    }

    h2 {
        font-size: 1.2rem;
    }

    div > div {
        padding: 0;
        margin: 3px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`

export default CartStyle