import styled from "styled-components";

export const Container = styled.div`

    background: var(--blue-700);
    padding: 1rem;

    border-radius: 0.7rem;
    /* border: 0.1rem solid ; */
    width: 100%;
    /* color: aliceblue; */

    display: flex;
    align-items: center;

    & + div {
        margin-top: 0.5rem;
    }

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: white;

        &::placeholder {
            color: antiquewhite;
        }

    }

    > svg {
        margin-right: 1rem;
    }
   
`
export const Error = styled.div`
    color: red;
    margin: 3px 0 1px;
`