import React from 'react';
// import whatsapp from '../../assets/images/icons/whatsapp.svg';
//import api from '../../services/api';
import { Container } from './styles';


export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacheItemProps {
    teacher: Teacher;
}

export function Post() {
    // function createNewConnection() {
    //     api.post('connections', {
    //         user_id: teacher.id
    //     });
    // }

    return (
        <Container>
            <header>
                {/* <img src={teacher.avatar} alt={teacher.name} /> */}
                <img src="https://github.com/guilhermerodz.png" alt="<dasasdsasda" />
                <div>
                    {/* <strong>{teacher.name}</strong> */}
                    <strong>Diogo</strong>
                    {/* <span>{teacher.subject}</span> */}
                    <span>Engenharia Informatica</span>
                </div>
            </header>
            {/* <p>{teacher.bio}</p> */}
            <div>
                <p>ADSUIHHASD9UHDASOIHA</p>
                <p>ADSUIHHASD9UHDASOIHAASDHOISADH</p>
                <p>ADSUIHHASD9HADSOIHADSOIHASDOIASDHOISADH</p>
                <p>ADSDHOISADH</p>
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


