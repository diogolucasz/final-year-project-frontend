import React from 'react';

import { Container, Panel } from './styles';

export function ProfilePanel() {

    return (
        <Panel>
            <Container>
                <div className="profile-cover"></div>
                <img
                    src="https://github.com/guilhermerodz.png"
                    alt="Avatar"
                    className="profile-picture"
                />
                <h1>Guilherme Rodz</h1>
                <h2>Software Engineer @ Rocketseat</h2>

                <div className="separator"></div>

                <div className="key-value">
                    <span className="key">Quem viu seu perfil</span>
                    <span className="value">1.558</span>
                </div>
                <div className="key-value">
                    <span className="key">Viram sua publicação</span>
                    <span className="value">388</span>
                </div>
            </Container>
        </Panel>
    );
};

