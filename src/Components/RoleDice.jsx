import React, { useState } from "react";
import styled from "styled-components";

const RoleDice = ({currentDice, roleDice}) => {
  

  




  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
      <img src={`images/dice/dice_${currentDice}.png`} alt={`Dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;

  p {
    font-size: 24px;
  }

  .dice {
    cursor: pointer;
  }
`;
