import styled from "styled-components";

export const Links = styled.section`

    display: grid;
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 20%;
    border-radius: 20px;
    padding: 35px;
    background-color: var(--blue-900);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 20px;

    div {
        display: flex;
        align-items: center;
        color: white;
        font-size: 1rem;
        transition: all 200ms ease;
        cursor: pointer;
         
        a {
            margin-left: 1rem;
        }

        & + div {
            margin-top: 1rem;
        }
    }
`

