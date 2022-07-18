import styled from "styled-components";

export const Container = styled.article`

    width: 100%;
    margin: 2rem 2rem;
    background: var(--blue-900);
    border: 1px solid var(--white);
    border-radius: 1rem;
   
    header {
        display: flex;
        align-items: center;
        padding: 3.2rem 2rem;
        
        img {
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
        }

        div {
            margin-left: 2.4rem;

            strong {
                display: block;
                size: 24px;
                line-height: 1.25;
                /* font: 700 2.4rem Archivo; */
                color: var(--white);
            }

            span {
                display: block;
                margin-top: .4rem;
                font-size: 1.6rem;
            }
        }
    }


    p {
        padding: 0 2rem;
        font-size: 1.6rem;
        line-height: 2.8rem;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 3.2rem;
        padding: 3.2rem 2rem;
        background: var(--grey-900);
        border-top: 1px solid var(--color-line-in-white);

        p > strong {
            display: block;
            font-size: 1.6rem;
            color: var(--rosa);
        }

        a {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 20rem;
            height: 5.6rem;
            font: 700 1.4rem;
            text-decoration: none;
            color: var(--color-button-text);
            background: var(--color-secondary);
            border: 0;
            border-radius: .8rem;
            transition: .2s;
            cursor: pointer;
        }

        a:hover {
            background-color: var(--color-secondary-dark);
        }
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