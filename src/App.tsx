import { useState } from "react"
import * as Styled from "./AppStyle"
import Input from "./components/Input"
import Button from "./components/Button"

function App() {
  const [userMessage, setUserMessage] = useState("")
  const [background, setBackground] = useState("gray")
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState("")

  function handleCalculateBmi(event : any){
    event.preventDefault()
    
    const bmi = weight / (height * height)
    setBmi(bmi.toFixed(2))
    calculateDanger(bmi)
  }

  function handleResetBmi(){
    setBackground("gray")
    setUserMessage("")
    setHeight(0)
    setWeight(0)
    setBmi("")
  }

  function calculateDanger(bmi : number){
    if(bmi < 18.8){
      //Abaixo do peso
      setBackground("yellow")
      setUserMessage("Below ideal weight !!")
    }else if(bmi < 24.9){
      //Peso ideal
      setBackground("green")
      setUserMessage("Everything is good !!")
    }else if(bmi < 29.9){
      //Levemento acima do peso
      setBackground("orange")
      setUserMessage("Overweight !!")
    }else if(bmi < 34.5){
      setBackground("#d00000")
      setUserMessage("Obesity Level 1 💀")
    }else if(bmi < 39.9){
      setBackground("#9d0208")
      setUserMessage("Obesity Level 2 💀💀")
    }else if(bmi > 40){
      setBackground("#6a040f")
      setUserMessage("Obesity Level 3 💀💀💀")
    }
  }

  function handleChangeValue(value : string, type : any){
    //Usando switch para diferenciar
    //Poderia ser só um if
    switch (type) {
      case "height":
        setHeight(parseFloat(value))
        break;
      case "weight":
        setWeight(parseFloat(value))
        break;
      default:
        console.log("caiu default")
        break;
    }
  }

  return (
    <>
      <Styled.GlobalStyle/>

      <Styled.Main backgroundColor={background}>
        <h1>BMI calculator</h1>
        <form onSubmit={handleCalculateBmi} onReset={handleResetBmi}>
          <Input
            content="Height"
            onChange={handleChangeValue}
          /> 
          <Input
            content="Weight"
            onChange={handleChangeValue}
          />
          <Styled.Buttons>
            <Button
              type="submit"
              content="Calculate BMI"
              onSubmit={handleCalculateBmi}
            />

            <Button
              type="reset"
              content="Reset"
              onSubmit={handleCalculateBmi}
            />
          </Styled.Buttons>
        </form>
        <h2>Your BMI is: {bmi}</h2>
        <h2>{userMessage}</h2>
      </Styled.Main>
    </>
  )
}

export default App
