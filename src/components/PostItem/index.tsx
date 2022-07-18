import React from 'react';
import { Container } from './styles';


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
                {/* <img src={teacher.avatar} alt={teacher.name} /> */}
                {/* <img src="https://github.com/guilhermerodz.png" alt="<dasasdsasda" /> */}
                <div>
                    {/* <strong>{teacher.name}</strong> */}
                    <strong>{post.subject}</strong>
                    <span>{post.user.username}</span>
                    <span>{`${post.user.name} ${post.user.surname}}`}</span>
                </div>
            </header>
            <div>
                <p>{post.message}</p>
            </div>
            <footer>
                <a
                // onClick={createNewConnection}
                // href={`https://wa.me/${teacher.whatsapp}`}

                //target="_blank"
                >
                    {/* <img src={whatsapp} alt="Whatsapp"/> */}
                    {/* <img src="https://github.com/guilhermerodz.png" alt="Whatsapp"/> */}
                    Entrar em contato
                </a>
            </footer>
        </Container>
    );
}


