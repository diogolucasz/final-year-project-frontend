import React from 'react';
import { ButtonCustom, ButtonFake, Container } from './styles';
import Button from '../Button';


export interface User {
    username: string,
    name: string,
    surname: string,
    email: string,
}

export interface Post {
    id: number;
    message: string;
    subject: string;
    user_id: string;
    user: User
}

export function PostItem(post: Post) {

    return (
        <Container>
            <header>
                <div>
                    <strong>{`${post.user.name} ${post.user.surname}`}</strong>
                    <strong>Engenharia Informatica</strong>
                    {/* <span>{post.user.username}</span> */}
                </div>
            </header>
            <div>
                <strong>{post.subject}</strong>
                <p>{post.message}</p>
            </div>
            <footer>
                <ButtonFake >
                    <a href={`https://github.com/${post.user.username}`}></a>
                </ButtonFake>
                <ButtonCustom >
                    <a href={`https://github.com/${post.user.username}`}> GitHub</a>
                </ButtonCustom>
            </footer>
        </Container>
    );
}


