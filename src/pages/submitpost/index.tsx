import { useEffect, useState } from "react";
import Aside from "../../components/Aside";
import { Header } from "../../components/Header";
import { api } from "../../services/apiClient";
import { Container, Content, FormContainer } from "./styles";

interface Course {
    id: string,
    name: string,
    description: string,
    created_at: string
}

export default function SubmitPost() {

    const [courses, setCourses] = useState<Course[]>([])

    useEffect(() => {
        api.get('/courses')
            .then(response => {
                setCourses(response.data)
            })
    }, [])

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <Aside />
                    <FormContainer>

                        <fieldset>
                            <legend>Seus Dados</legend>
                            {/* <Input name="name" label="Nome Completo" />
                            <Input name="avatar" label="Avatar" />
                            <Input name="whatsapp" label="Whatsapp" />
                            <Textarea name="bio" label="Biografia" /> */}
                            {/* <Input></Input> */}
                        </fieldset>


                        <fieldset>
                            <legend>Subject</legend>
                            <select>
                                {courses.map((course) => {
                                    return <option key={course.id} value={course.id}>{course.name}</option>
                                })}
                            </select>


                        </fieldset>^

                        <footer>
                            <p>
                                {/* <img src={warningIcon} alt="Aviso Importante" /> */}
                                Importante <br />
                                Preencha todos os dados
                            </p>
                            <button type="button">Salvar cadastro</button>
                        </footer>
                    </FormContainer>
                </Content>
            </Container>
        </>
    );
}