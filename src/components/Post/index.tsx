import React from 'react';
import { Container } from './styles';


export interface Post {
    id: number;
    message: string;
    subject: string;
    user_id: string;
    // owner: Owner;
}

// interface Owner {
//     id: number;
//     login: string
// }

export function PostItem({ id, message, subject, user_id }: Post) {

    return (
        <Container>
            <header>
                {/* <img src={teacher.avatar} alt={teacher.name} /> */}
                {/* <img src="https://github.com/guilhermerodz.png" alt="<dasasdsasda" /> */}
                <div>
                    {/* <strong>{teacher.name}</strong> */}
                    <strong>{id}</strong>
                    <span>{subject}</span>
                    <span>{user_id}</span>
                </div>
            </header>
            {/* <p>{teacher.bio}</p> */}
            <div>
                <p>{message}</p>
            </div>
            <footer>
                <p>
                    Preço/hora
                    {/* //<strong>R$ {teacher.cost}</strong> */}
                    <strong>R$ 69</strong>
                </p>
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


