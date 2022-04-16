import styled from "styled-components";

export const Container = styled.header`
    background: var(--dark-blue);
    height: 5rem;
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 0px;

    //box-shadow: var(--dark-blue) 0px 1rem 1.25rem;

`

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    
    width: 100%;
    max-width: 1280px;
    -webkit-box-align: center;
    color: rgb(255, 255, 255);
    padding: 12px 0px;

    nav {
        margin-left: 5rem;
        height: 5rem;

        a {
            display: inline-block;
            position: relative;
            padding: 0 0.5rem;
            height: 5rem;
            line-height: 5rem;
            color: var(--gray-100);

            transition: color 0.2s;

            & + a {
                margin-left: 2rem;
            }

            &:hover {
                color: var(--white);
            }

            &:active {
                font-weight: bold;
                color: var(--white);
            }

            &:active::after {
                content: '';
                height: 3px;
                border-radius: 3px;
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                background: var(--white);
            }
        }
    }
`


// https://andromeda.rocketseat.dev/?path=/story/docs-colors--page