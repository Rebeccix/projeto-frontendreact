import styled from "styled-components";

export const HeaderStyle = styled.header`
    z-index: 1;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 15vh;
    padding: 0 50px;
    position: fixed;

    span {
        display: flex;
    }

    div {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        transform: rotate(90deg);
        margin-right: 10px;
    }
    
    h1 {
        cursor: pointer;
        color: White;
    }

    button {
        padding: 0;
        border: none;
        background: none;
        position: absolute;
        top: 60px;
        background-color: white;
        width: 50px;
        border-radius: 10px;
        cursor: pointer;
    }
`