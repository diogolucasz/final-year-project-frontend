import { GetServerSideProps } from "next";
import { redirect } from "next/dist/server/api-utils";
import { parseCookies } from "nookies";
import { FormEvent, useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";
import { withSSRGuest } from "../utilities/withSSRGuest";

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { SignIn } = useContext(AuthContext);

    async function handleSubmit(event: FormEvent) {

        event.preventDefault()

        const data = {
            email,
            password
        }

        await SignIn(data);

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Entrar</button>
        </form>
    )
}

export const getServerSideProps = withSSRGuest(async (ctx) => {

    return {
        props: {}
    }
});