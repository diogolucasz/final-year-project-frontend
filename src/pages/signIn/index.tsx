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
        // <Container>
        <form onSubmit={handleSubmit(handleSignIn)}>
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
        </form>
        // </Container>
    )
}

export const getServerSideProps = withSSRGuest(async (ctx) => {

    return {
        props: {},
    }

})