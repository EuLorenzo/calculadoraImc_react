import * as Styled from "./styled"

interface InputProps{
    content : string
    onChange : Function
}

function Input({content, onChange} : InputProps){

    function handleChange(event : React.ChangeEvent<HTMLInputElement>){
        onChange(event.target.value, event.target.name)
    }

    return(
        <Styled.Input>
            <Styled.Label>{content}</Styled.Label>
            <Styled.InputField 
                name={content.toLowerCase()}
                onChange={handleChange}
            />
        </Styled.Input>
    )
}

export default Input