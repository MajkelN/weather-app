import { styled } from "styled-components";

export const Form = styled.form`
    @media (orientation: portrait) and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Input = styled.input`
    background-color: #041C32;
    color: #064663;
    font-size: 2rem;
    outline: none;
    transition: .2s linear;

    &:hover {
        background-color: #04293A;
        color: #ECB365;
        border-bottom: 3px solid #ECB365;
    }

    @media (orientation: portrait) and (max-width: 1100px) {
        text-align: center;
    }

    @media (orientation: landscape)  and (max-width: 700px) {
        font-size: 1.5rem;
    }
`


export const InputText = styled(Input).attrs({ 
    type: 'text',
    
})`
    border: none;
    border-bottom: 3px solid #064663;
    padding: 10px 0 10px 5px;
    width: 100%;
    margin: 40px 0 10px 0;

    &::placeholder  {
        color: #064663;
        font-weight: 400;
        font-size: 2rem;
    }

    &:focus-visible {
        background-color: #04293A;
        color: #ECB365;
        border-bottom: 3px solid #ECB365;
    }

    @media (orientation: landscape) and (max-width: 1550px) {
        margin: 20px 0 10px 0;
    }

    @media (orientation: landscape)  and (max-width: 700px) {
        &::placeholder  {
            font-size: 1.5rem;
        }
    }

    @media (orientation: portrait) and (max-width: 1100px) {
        margin: 20px 0 10px 0;
        width: 60%;
    }

    @media (orientation: portrait) and (max-width: 850px) {
        width: 70%;
    }

    @media (orientation: portrait) and (max-width: 500px) {
        width: 90%;
    }
`

export const InputSubmit = styled(Input).attrs({ 
    type: 'submit',
})`
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 10px;
    padding: 5px 20px;
    border: 3px solid #064663;
    border-radius: 5px;

    &:hover {
        border: 3px solid #ECB365;
    }
`

export const ErrorItem = styled.p`
    color: #ECB365;
    font-size: 2rem;
    font-weight: 600;
    margin: 10px 0;
`