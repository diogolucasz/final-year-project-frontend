import { useContext, useEffect } from "react"
import { Can } from "../components/Can";
import { Header } from "../components/Header";
import { AuthContext } from "../context/AuthContext"
import { api } from "../services/apiClient";

import { withSSRAuth } from "../utilities/withSSRAuth";

export default function Dashboard() {

    const { user, signOut } = useContext(AuthContext);

    // const userCanSeeMetrics = useCan({
    //     roles: ['administrator']
    // })

    useEffect(() => {

        api
        .get('/me').then(response => console.log(response))
        .catch(error => console.log(error));

    }, [])

    return (
        <>
            <Header/>
            <h1>dashboard {user?.email}</h1>
            <button onClick={signOut}>Signout</button>
            
            <Can permissions={['metrics.list']}>
                <div>hehuehuehue</div>
            </Can>
        </>
    )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {

    return {
        props: {}
    }
})