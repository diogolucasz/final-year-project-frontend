import styled from "styled-components";

export const Links = styled.section`

    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 20%;
    border-radius: 20px;
    padding: 35px;
    background-color: var(--dark-blue);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 20px;

    div {
        display: flex;
    align-items: center;
    color: blue;
    font-size: 15px;
    transition: all 200ms ease;
    cursor: pointer;
    }
`