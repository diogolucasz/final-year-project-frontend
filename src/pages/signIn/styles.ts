import styled from 'styled-components';
import Button from '../../components/Button';
import background from '../../../public/images/isla.png'

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
    background-image:  url(background);
`

export const ButtonLogin = styled(Button)`
    margin: 1rem 0 1rem 0;
    width: 100%;
`