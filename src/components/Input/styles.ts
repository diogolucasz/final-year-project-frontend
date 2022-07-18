import styled from "styled-components";

export const Container = styled.div`

    background: var(--blue-900);
    padding: 1rem;
    margin: 0.2rem 0.2rem;
    border-radius: 0.3rem;
    width: 100%;

    display: flex;
    align-items: center;

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: white;

        &::placeholder {
            color: var(--white);
        }
    }

    > svg {
        margin-right: 1rem;
    }
   
`
export const Error = styled.div`
    color: red;
    margin: 0.2rem 0.2rem;
`