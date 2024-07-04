import styled from "styled-components"

export const Input = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    color: #fff;
    font-weight: 700;

    margin: 10px 0;
`

export const InputField = styled.input`
    width: 70%;
    padding: 10px;
    
    border: none;
    border-radius: 5px;
    outline: none;

    margin: auto;

    &:focus{
        outline: 1px solid #E8E8E8;
    }

    transition: outline 0.3s;
`
    