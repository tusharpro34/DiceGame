import styled from "styled-components"


const Rules = () => {
  return (
    <RualesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
        <p>if you get wrong guess then 2 point will be dedcuted</p>
        </div>
    </RualesContainer>
  )
}

export default Rules

const RualesContainer = styled.div`
    background: #FBF1F1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }
`;