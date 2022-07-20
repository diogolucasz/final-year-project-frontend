import React, { useContext, useEffect, useState } from 'react';
import { string } from 'yup';
import { AuthContext } from '../../context/AuthContext';

import { Container } from './styles';


export function ProfilePanel() {

    const { user, signOut } = useContext(AuthContext);

    return (

        <Container className="left-column">
            <div className="profile-cover"></div>
            <img
                src="https://github.com/guilhermerodz.png"
                alt="Avatar"
                className="profile-picture"
            />
            <h1>{`${user?.name} ${user?.surname}`}</h1>
            <div className="separator" />
            <h2>Engenharia Informatica</h2>
        </Container>

    );
};

