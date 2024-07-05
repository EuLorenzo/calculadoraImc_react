import * as Styled from "./styled"

interface InputProps{
    content : string
    type : string
}

function Input({content, type} : InputProps){
    return(
        <Styled.Input>
            <Styled.InputField 
                type={type}
                value={content} 
                name={content.toLowerCase()}
            />
        </Styled.Input>
    )
}

export default Input