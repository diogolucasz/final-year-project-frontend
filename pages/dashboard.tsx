import { useContext, useEffect } from "react"
import { Can } from "../components/Can";
import { AuthContext } from "../context/AuthContext"
import { useCan } from "../hook/useCan";
import { api } from "../services/apiClient";

import { withSSRAuth } from "../utilities/withSSRAuth";

export default function Dashboard() {

    const { user } = useContext(AuthContext);

    const userCanSeeMetrics = useCan({
        roles: ['administrator']
    })

    useEffect(() => {

        api
        .get('/me').then(response => console.log(response))
        .catch(error => console.log(error));

    }, [])

    return (
        <>
            <h1>dashboard {user?.email}</h1>
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