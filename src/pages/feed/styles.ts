import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    main {
        max-width: 1280px;
        margin: 200px auto 60px;
        padding: 0px 30px;
        display: flex;
        align-items: flex-start;
        -webkit-box-pack: justify;
        justify-content: space-between;
        z-index: 2;
    }

    /* @media (min-width: 1180px) {

        > main {
            margin: 0 30px;
            display: flex;
            justify-content: center;
            position: relative;
        }

        .left-column {
            display: unset;
        }
    }

    .profile-panel {
        display: none;
    } */

    
`
