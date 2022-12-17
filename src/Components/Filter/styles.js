import styled from "styled-components";

export const FilterStyle = styled.div`
    z-index: 0;
    position: fixed;
    background-color: aliceblue;
    display: flex;
    text-align: center;
    height: auto;
    border-radius: 10px;
    padding: 10px 0;
    
    p {
        margin-bottom: 10px;
    }
    
    input {
        -moz-appearance: textfield;
        margin: 5px 0;
        width: 90%;
    }
    
    select {
        margin-bottom: 10px;
    }
    `

export const ContainerFilter = styled.div`
    padding-top: 110px;
    overflow: hidden;
    width: ${props => props.toggle ? "0" : "200px"};
    transition: width 1s;
`