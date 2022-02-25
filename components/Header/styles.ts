import styled from "styled-components";

export const Container = styled.header`
    background: var(--dark-blue);
    height: 5rem;
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 0px;

    box-shadow: var(--dark-blue) 0px 1rem 1.25rem;

`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    
    width: 100%;
    max-width: 1366px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(255, 255, 255);
    padding: 12px 0px;

    

`
// https://andromeda.rocketseat.dev/?path=/story/docs-colors--page