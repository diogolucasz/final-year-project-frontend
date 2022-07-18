import styled from "styled-components";
//import Background from '../../../public/images/background.svg';
import Button from '../../components/Button'

export const Container = styled.main`

    margin: 50px 0;
    
    max-width: 960px;
    margin: 0 auto;
    padding: 0 2rem;
    height: calc(100vh - 5rem);

    display: flex;
    align-items: center;
    justify-content: space-between;

    main {
        max-width: 500px;

        h1 {
            font-size: 3rem;
            font-weight: 700;
        }

        p{
            font-size: 1.2rem;
            margin-top: 24px;
            line-height: 38px;
        }

        span {
            font-size: 1.8rem;
            font-weight: 500;
            color: var(--blue-300);
        }
    }
`

export const ButtonHome = styled(Button)`
    width: 300px;
    margin-top: 2rem;
    
`