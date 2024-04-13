import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice"
import { useState } from "react"
import { Button } from "../styled/Button"
import Rules from "./Rules"


const GamePlay = () => {

  const [score, setScore] = useState(0);
  const[selectedNumber, setselectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const resetNumber = () =>{
    setScore(0)
  }

  const generateRandomNumber = (min, max) => {
    
    return  Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const roleDice = () =>{
    if(!selectedNumber){
      setError("You have not selated any number")
    return;

    }
    
    
    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice((prev) => randomNumber)


    

    if (selectedNumber===randomNumber){
      setScore((prev)=> prev + randomNumber);
    }
    else{
      setScore((prev)=> prev - 2);
    }
    setselectedNumber(undefined);
  }



  return (
    <MainContainer>
      <div className="top_section">
      <TotalScore score={score}/>
      <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setselectedNumber={setselectedNumber}/>
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice}/>
      <div className="btns">
        <Button className="reset" onClick={resetNumber}>Reset</Button>
        <Button onClick={()=>setShowRules((prev)=>!prev)}>{
          showRules ? "Hide" : "Show Rules"}</Button>
      </div>
      {showRules && <Rules/>}  
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
  padding: 20px 300px;
  .top_section{
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 300px;
    gap: 10px;
    margin-top: 20px;
  }
  .reset{
    background-color: red;
  }
`;
