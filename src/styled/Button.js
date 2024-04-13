import styled from "styled-components";


export const Button = styled.button`
  color: white;
  padding:10px 18px;
  background:black;
  border-radius:5px;
  min-width:220px;
  border:none;
  font-size:16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in-out;
  margin-left: 300px;
  &:hover{
    background-color:white;
    border: 1px solid black;
    color: black;
    cursor: pointer;
    transition: 0.3s background ease-in-out;
  }
`;
