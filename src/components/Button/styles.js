import styled from 'styled-components';

export const ButtonContainer = styled.button`
    border: 1px solid #fafafa;
    background-color: #fafafa;
    border-radius: 20px;

    height: 5rem;
    width:80%;
    margin:2rem;
    font-size:1.5rem;
    
    
    &: hover{
        cursor:pointer;
        border: 1px solid #fafafa40;
        background-color: #fafafa40;
    }
`