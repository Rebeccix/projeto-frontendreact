import styled from "styled-components";

export const CardStyle = styled.div`
    background-color: bisque;
    flex: 1;

    div > div {
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
`