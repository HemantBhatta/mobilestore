import styled from 'styled-components'


const ButtonContainer = styled.button`

border: none;
    background-color: rgb(175, 159, 67);
    color: black;
    padding: 10px 6px;
    font-size: 1.8rem;
    font-family: sans-serif;
    text-transform: capitalize;
    border:2px solid white;
    margin-top:30px;
    transition:1s all;
    border-radius:3px;

    &:focus{
        outline:none;
    }

    &:hover{
    background-color: ${props=>{return props.modal ? '#c9c9ff': 'transparent'}};
    }
 

`

export default ButtonContainer