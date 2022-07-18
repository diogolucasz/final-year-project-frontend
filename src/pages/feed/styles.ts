import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    main {
        max-width: 1180px;
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
    }
`
