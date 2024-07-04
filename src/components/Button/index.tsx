import * as Styled from "./styled"

interface InputProps{
    content : string
    type : string
    onSubmit : Function
}

function Input({content, type , onSubmit} : InputProps){

    function handleCalculate(){
        onSubmit()
    }

    return(
        <Styled.Input>
            <Styled.InputField 
                type={type}
                value={content} 
                name={content.toLowerCase()}
                onSubmit={handleCalculate}
            />
        </Styled.Input>
    )
}

export default Input