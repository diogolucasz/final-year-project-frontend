import styled from "styled-components";
import Button from "../Button";

export const Container = styled.article`

    width: 95%;
    margin: 2rem 2rem;
    background: var(--blue-900);
    border: 1px solid var(--grey-900);
    border-radius: 1rem;
    max-height: 400px;
   
    header {
        display: flex;
        align-items: center;
    }   
        
        img {
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
        }

        div {
            margin-left: 1rem;

            strong {
                display: block;
                size: 2rem;
                line-height: 2;
                color: var(--white);
                margin-left: 1rem;
            }

            span {
                display: block;
                margin-top: 1rem;
                font-size: 1.6rem;
                margin-left: 1rem;
            }

            p {
                margin-left: 1rem;
                margin-top: 1rem;
                /* padding: 1rem 2rem; */
                font-size: 1rem;
                line-height: 2rem;
            }
        }
        

        footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    

    @media (min-width: 700px) {
    header,
    footer {
        padding: 3.2rem;
    }

    p {
        padding: 0 3.2rem;
    }

    footer p strong {
        margin-left: 1.6rem;
        display: initial;
    }

    footer a {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;
    }

    footer a img {
        margin-right: 1.6rem;
    }
}
`

export const ButtonCustom = styled(Button)`
    background: var(--gray-900);
    font-size: 1rem;
    margin-bottom: 1rem;
`

export const ButtonFake = styled(Button)`
    background: transparent;
`