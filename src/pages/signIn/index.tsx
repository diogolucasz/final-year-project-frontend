import { useCallback, useContext } from "react"
import { AuthContext } from "../../context/AuthContext";

import { FiLock, FiMail } from 'react-icons/fi'

import { useForm } from 'react-hook-form';
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { GetServerSideProps } from "next/types";
import { parseCookies } from "nookies";
import { withSSRGuest } from "../../utilities/withSSRGuest";
import { Background, Container, Content } from "./styles";

export interface SignInData {
    email: string,
    password: string
}

export default function SignIn() {

    const { signIn } = useContext(AuthContext);

    const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatorio').email('Digite um e-mail válido'),
        password: Yup.string().required('Password obrigatoria'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<SignInData>({
        resolver: yupResolver(schema)
    })

    const handleSignIn = useCallback(async (data: SignInData) => {

        try {

            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatorio').email('Digite um e-mail válido'),
                password: Yup.string().required('Password obrigatoria'),
            })

            await schema.validate(data)

        } catch (error) {
            console.error(error)
        }


        await signIn(data);
    }, [signIn]);

    return (
        <Container>
            <Content>
                <img src="/images/logo.png" height={180} alt="logo ISLA" />
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <h1>Login</h1>
                    <Input
                        {...register('email')}
                        name="email"
                        icon={FiMail}
                        placeholder="E-mail"
                        error={errors.email}
                    />
                    <Input
                        {...register('password')}
                        name="password"
                        icon={FiLock}
                        placeholder="Password"
                        error={errors.password}
                    />
                    <Button type="submit">Entrar</Button>
                    <a href="">Esqueceste-te da password?</a>
                </form>
            </Content>
            <Background />
        </Container>
    )
}

export const getServerSideProps = withSSRGuest(async (ctx) => {

    return {
        props: {},
    }

})