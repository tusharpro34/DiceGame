import { useState } from "react";
import { Button } from "../styled/Button";
import styled from "styled-components"

const StartGame = ({toggle}) => {

  return (
    <Container>
      <div className="dimage"><img src="/images/dices 1.png" alt="" /></div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>

    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display:flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  .content{
    h1{
      font-size: 96px;
      white-space:nowrap ;
    }

  }



`;

