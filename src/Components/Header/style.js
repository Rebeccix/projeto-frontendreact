import styled from 'styled-components'

const HeaderStyle = styled.header`
    background-color: #ff5a00;
    padding: 15px 15px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
        "topRight topLeft"
        "bottom bottom"
    ;

    div {
        grid-area: bottom;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input {
        border-radius: 5px;
        width: 100%;
        height: 35px;
        background: url("search.png") no-repeat scroll;
        background-position: 98%;
        background-size: 20px;
        background-color: white;
        cursor: pointer;
    }

    input[type="text"] {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 1.6rem;
    }

    button {
        border-radius: 5px;
    }

    img {
        width: 30px;
        height: 30px;
    }

    img:first-of-type {
        width: 100px;
        grid-area: topRight;
        cursor: pointer;

    }

    img:last-of-type {
        grid-area: topLeft;
        justify-self: flex-end;
        cursor: pointer;
    }
`

export default HeaderStyle