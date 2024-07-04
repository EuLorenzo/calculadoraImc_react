import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
body{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
`


export const Main = styled.div<{backgroundColor : string}>`
    display: flex;
    flex-direction: column;

    color: black;
    text-align: center;
    
    background-color: ${props => props.backgroundColor};

    border-radius: 8px;

    width: 400px;
    height: 500px;

    transition: background-color 0.5s;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(70% + 20px);
    margin: auto;


    margin-top: 30px;
`