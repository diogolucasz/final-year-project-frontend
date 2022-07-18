import styled from "styled-components";
import Background from '../../../public/images/background.svg';

export const Container = styled.main`

    margin: 50px 0;
    background-image: url(${Background});
    //height: 500px;
    //background-size: cover;
    //background-repeat: no-repeat;

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