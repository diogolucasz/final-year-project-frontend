import { FormEvent, useContext, useRef, useState } from "react"
import { AuthContext } from "../../context/AuthContext";
import { withSSRGuest } from "../../utilities/withSSRGuest";

import { FiLock, FiMail } from 'react-icons/fi'

import { useForm } from 'react-hook-form';
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "./styles";

export default function SignIn() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const { signIn } = useContext(AuthContext);

    async function handleSignIn(data: any) {

        // event.preventDefault()

        // const data = {
        //     email,
        //     password
        // }

        // console.log(data)

        await signIn(data);
    }

    return (
        // <Container>
        <form onSubmit={handleSubmit(handleSignIn)}>
            <Input
                {...register('email')}
                name="email"
                icon={FiMail}
                placeholder="E-mail"
            />
            <Input
                {...register('password')}
                name="password"
                icon={FiLock}
                placeholder="Password"
            />
            <Button type="submit">Entrar</Button>
        </form>
        // </Container>
    )
}

// export const getServerSideProps = withSSRGuest(async (ctx) => {

//     return {
//         props: {}
//     }
// });