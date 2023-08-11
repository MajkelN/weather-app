import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
    display: grid;
`;

export const WrapperHome = styled(Wrapper)`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 1;
    width: 70vw;
    gap: 150px;
    align-items: center;

    & > img {
        width: 100%;
    }

    h1 {
        width: 100%;
        line-height: 1;
        font-size:5.5rem;
    }

    @media (orientation: landscape) and (max-width: 1700px) {
        h1 {
            font-size:4.5rem;
        }
    }

    @media (orientation: landscape) and (max-width: 1550px) {
        gap: 100px;
    }

    @media (orientation: landscape) and (max-width: 950px) {
        gap: 50px;
        
        h1 {
            font-size: 3rem;
        }
    }

    @media (orientation: landscape) and (max-width: 700px) {
        gap: 50px;
        
        h1 {
            font-size: 2.5rem;
        }
    }

    @media (orientation: portrait) and (max-width: 1100px) {
        grid-template-columns: 1fr;
        grid-template-rows: 2;
        gap: 50px;
        width: 60vw;

        h1 {
            text-align: center;
            font-size:4rem;
        }

        & > img {
            grid-row: 1 / 2;
        }
    }

    @media (orientation: portrait) and (max-width: 950px) {
        width: 70vw;

        h1 {
            font-size: 3.5rem;
        }
    }

    @media (orientation: portrait) and (max-width: 750px) {
        width: 80vw;
        
        h1 {
            font-size: 3rem;
        }
    }
`

export const WrapperPlace = styled(Wrapper)`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, auto);
    gap: 10px 25px;
    width: 60vw;
    padding: 20px;
    background-color: #04293A;
    border-radius: 5px;

    & > header {
        grid-column: 1 / 3;
        display: flex;
        align-items: center;

        & > h2 {
            text-transform: uppercase;
            font-size: 3rem;
        }
    }

    @media (orientation: landscape) and (max-width: 1700px) {
        width: 70vw;
    }

    @media (orientation: landscape) and (max-width: 1450px) {
        width: 80vw;
    }

    @media (max-width: 1150px) {
        width: 70vw;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, auto);
        gap: 20px 0;

        & > header {
            grid-column: 1 / 2;

            & > h2 {
                font-size: 2.5rem;
            }
        }
    }

    @media (orientation: landscape) and (max-width: 900px) {
        width: 80vw;
        gap: 10px 0;
    }

    @media (max-width: 550px) {
        width: 85vw;
    }
`

export const WrapperWeather = styled.div`
    font-size: 1.5rem;
    border-radius: 5px;
    background-color: #064663;
    padding: 15px;
    overflow: hidden;

    & > h3 {
        font-size: 2rem;
        text-transform: uppercase;
    }
`

export const WrapperStatusWeather = styled.div`
    width: 100%;
    margin: 20px 0;
    display: grid;
    gap: 10px;
    grid-template-rows: repeat(3, auto);

    &#currentWeather {
        grid-template-columns: repeat(3, 1fr);

        @media (max-width: 750px) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(4, auto); 
        }

        @media (max-width: 550px) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(4, auto); 
        }
    }

    &#tomorrowWeather {
        grid-template-columns: auto repeat(2, 1fr);

        & > img {
            grid-row: 1/4;
            align-self: center;
            justify-self: center;
        } 

        @media (max-width: 1150px) {
            grid-template-columns: auto repeat(3, 1fr);
            grid-template-rows: repeat(2, auto);

            & > img {
            grid-row: 1 / 3;
            } 
        }

        @media (max-width: 750px) {
            grid-template-columns: auto repeat(2, 1fr);
            grid-template-rows: repeat(3, auto);

            & > img {
            grid-row: 1 / 4;
            } 
        }
    }
`

export const WrapperError = styled.section`
    font-size: 2rem;

    h2 {
        font-size: 6rem;
    }

    & > #errorMessage {
        margin: 20px 0;

        & > i {
        font-size: 3rem;
        font-weight: 600;
        }
    }
    
`

export const ReturnLink = styled(Link)`
    font-size: 2.5rem;
    text-decoration: none;
    color: #064663;
    display: block;
    width: fit-content;
    transition: .2s linear;

    &:hover {
        color: #ECB365;
    }
`