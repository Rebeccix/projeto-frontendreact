import styled from "styled-components";

export const CardStyle = styled.div`
    width: ${props => props.toggleCart ? "0" : "300px"};
    padding-top: 110px;
    transition: width 1s;
    background-color: bisque;

    div {
        padding: 0 10px;
    }

    div > div > div {
        display: flex;
        justify-content: space-between;
    }

    .empty {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .full {
        display: flex;
        justify-content: space-between;
    }

    p {
        margin: 10px 0;
    }
    
    @media screen and (min-width: 412px) {
        order: 1;
    }
`