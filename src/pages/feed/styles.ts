import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    @media (min-width: 1280px) {

        > main {
            margin: 0 30px;
            display: flex;
            justify-content: center;
        }

        .profile-panel {
            display: unset;
        }
    }

    .profile-panel {
        display: none;
    }

    
`
