import styled from 'styled-components';
import background from '../../../public/images/background.svg';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    width: 100%;
    max-width: 720px;

    form {
        margin: 80px 0;
        width: 360px;
        text-align: center;

        h1{
            margin-bottom: 2rem;
        }
    }
`
export const Background = styled.div`
    flex: 1;
    background: url(${background}) no-repeat center;
    background-size: cover;
`