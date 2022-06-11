import React from 'react';
// import whatsapp from '../../assets/images/icons/whatsapp.svg';
//import api from '../../services/api';
import { Container } from './styles';


export interface Post {
    id: number;
    name: string;
    owner: Owner;
    //description: string;
    // user_id: string;

}

interface Owner {
    id: number;
    login: string
}

export function Post({ id, owner, name }: Post) {
    
    return (
        <Container>
            <header>
                {/* <img src={teacher.avatar} alt={teacher.name} /> */}
                {/* <img src="https://github.com/guilhermerodz.png" alt="<dasasdsasda" /> */}
                <div>
                    {/* <strong>{teacher.name}</strong> */}
                    <strong>{owner.id}</strong>
                    {/* <span>{teacher.subject}</span> */}
                    <span>{name}</span>
                </div>
            </header>
            {/* <p>{teacher.bio}</p> */}
            <div>
                <p>descricao</p>
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


