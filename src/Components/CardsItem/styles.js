import styled from "styled-components";

export const CardItemStyle = styled.div`
    padding: 10px 0 ;
    max-width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    margin: 10px 0;
    background-color: transparent;

    h1 {
        margin: 10px auto;
        color: yellow;
        font-size: 16px;
    }

    p {
        color: yellow;
    }

    img {
        object-fit: contain;
        height: 100px;
    }

    button {
        border-radius: 10px;
        margin: 0 auto;
        width: 150px;
        height: 50px;
        font-size: 16px;
    }
`