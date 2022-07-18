import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue-900);
    height: 6rem;
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 0px;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1280px;
    

    display: flex;
    align-items: center;
    flex-direction: row;
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
            font-family: 'Inter', sans-serif;

            transition: color 0.2s;

            & + a {
                margin-left: 2rem;
            }

            &:hover {
                color: var(--white);
            }

            &.active {
                font-weight: bold;
                color: var(--white);
            }

            &.active::after {
                content: '';
                height: 0.1rem;
                border-radius: 0.1rem;
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                background: var(--blue-300);
            }
        }
    }

    svg {
        width: 1.2rem;
        height: 1.2rem;
        color: #999591;
    }
`
export const UserController = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    align-items: center;
`
export const ButtonsArea = styled.div`
    /* margin-left: auto; */
    display: flex;
   margin-right: 4rem;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    //margin-left: 4rem;
    justify-content: space-between;
    margin-left: auto;

    div {
        display: flex;
        align-items: center;
        flex-direction: row;

        strong {
            display: inline;
        }

        span {
            margin-left: 1rem;
        }
    }
`