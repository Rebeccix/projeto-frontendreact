import styled from "styled-components";

export const MainStyle = styled.div`
    background: url("https://wallpaperaccess.com/full/1268183.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    .empty {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-width: 412px) {
        display: flex;
        flex: 1;
        gap: 10px;
        padding: 0 5vw;
    }
`

export const ContainerMain = styled.div`
    padding: 100px 0;
    margin-top: 30px;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 0 15px;

    @media screen and (max-width: 412px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`