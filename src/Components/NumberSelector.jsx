import { useState } from "react"
import styled from "styled-components"

const NumberSelector = ({error, selectedNumber, setselectedNumber,setError}) => {

    const arrNumber = [1,2,3,4,5,6]

    const numberSelecterHandaler=(value)=>{
        setselectedNumber(value)
        setError("")

    }
    

    return (
        <NumberSelectorContainer>
            <p className="red">{error}</p>
            <div className="flex">
                {arrNumber.map((value, i) => (
                <Box 
                    key={i}
                    isSelected={value === selectedNumber}
                    onClick={()=>numberSelecterHandaler(value)}
                >
                    {value}
                </Box>
            ))}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`


    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{display: flex;
    gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 800;
    }
    .red{
        color: red;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${props => (props.isSelected ? "black" : "white")};
    color: ${props => (!props.isSelected ? "black" : "white")};
`
