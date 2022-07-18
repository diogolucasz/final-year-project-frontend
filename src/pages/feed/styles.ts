import styled from 'styled-components';
import Button from '../../components/Button';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    main {
        max-width: 1280px;
        margin: 12rem auto 60px;
        padding: 0px 30px;
        display: flex;
        align-items: flex-start;
        -webkit-box-pack: justify;
        justify-content: space-between;
        z-index: 2;
    }    
`

export const Content = styled.div`

    display: flex;
    flex-direction: column;

    form {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 2rem;
    }
`

export const Loading = styled.div`
    background-color: red;
`
export const ButtonSearch = styled(Button)`
   // width: 5rem;
    min-width: 4rem;
    margin-left: 1rem;
    border-radius: 0.3rem;
    padding: 1rem 1rem; 
`