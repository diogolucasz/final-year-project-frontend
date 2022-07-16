import styled from "styled-components";

export const Container = styled.main`
    max-width: 960px;
    margin: 0 auto;
    padding: 0 2rem;
    height: calc(100vh - 5rem);

    display: flex;
    align-items: center;
    justify-content: space-between;

    section {
        max-width: 600px;

        >span {
            font-size: 1.5rem;
            font-weight: 500;
        }
    }
`