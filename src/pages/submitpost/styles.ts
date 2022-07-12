import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const Content = styled.div`

    max-width: 1280px;
    margin: 200px auto 60px;
    padding: 0px 30px;
    display: flex;
    align-items: flex-start;
    -webkit-box-pack: justify;
    justify-content: space-between;
    z-index: 2;

`


export const FormContainer = styled.main`

    background-color: aliceblue;
    width: 100%;
    max-width: 700px;
    border-radius: 1rem;
    margin: -4rem auto 4rem;

    fieldset {
        border: 0;
        padding: 0 2rem;
    }

    fieldset + fieldset{
        margin-top: 6rem;
    }

    legend {
        font: 700 2rem Archivo;
        color: red;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1rem;
        border-bottom: 1px solid red;
    }
    
`
