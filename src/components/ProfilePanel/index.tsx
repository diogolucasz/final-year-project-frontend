import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import { Container, Panel } from './styles';

export function ProfilePanel() {

    const { user, signOut } = useContext(AuthContext);

    return (
        <Panel>
            <Container className="left-column">
                <div className="profile-cover"></div>
                <img
                    src="https://github.com/guilhermerodz.png"
                    alt="Avatar"
                    className="profile-picture"
                />
                <h1>{`${user?.name} ${user?.surname}`}</h1>
                <h2>Software Engineer @ Rocketseat</h2>

                <div className="separator"/>
                
                    
                
            </Container>
        </Panel>
    );
};

