import { GetServerSideProps } from "next";
import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/Header";
import { AuthContext } from "../../context/AuthContext";
import { setupAPIClient } from "../../services/api";
import { withSSRAuth } from "../../utilities/withSSRAuth";

export default function Dashboard() {

    const { user, signOut } = useContext(AuthContext);

    // const userCanSeeMetrics = useCan({
    //     roles: ['administrator']
    // })

    // useEffect(() => {

    //     api
    //         .get('/users/me').then(response => console.log(response))
    //         .catch(error => console.log(error));

    // }, [])

    // const [repositories, setRepositories] = useState<string[]>([]);

    return (
        <>
            <Header />
            <></>
            <h1>sdanikasdnidsainjdias</h1>
            <h1>sdanikasdnidsainjdias</h1>
            <h1>sdanikasdnidsainjdias</h1>
            <h1>sdanikasdnidsainjdias</h1>
            <h1>sdanikasdnidsainjdias</h1>
            <hr />
            <h1>dashboard {user?.email}</h1>
            <h1>dashboard {user?.roles}</h1>
            <button onClick={signOut}>Signout</button>
            {/* {console.log(user)} */}

            {/* <Can permissions={['metrics.list']}>
                <div>hehuehuehue</div>
            </Can> */}
            {/* <ul>
                {repositories.map((repo: string) => (
                    <li key={repo}>{repo}</li>
                ))}
            </ul> */}

        </>
    )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {

    const apiClient = setupAPIClient(ctx);

    const response = await apiClient.get('/users/me')

    console.log(response.data)




    return {
        props: {}
    }
})

// export const getServerSideProps: GetServerSideProps = async () => {

//     const response = await fetch('https://api.github.com/users/diogolucasz/repos');
//     //console.log(response)
//     const data = await response.json();
//     //console.log(data)
//     const repositoryNames = data.map((item: string) => item.name)

//     return {
//         props: {
//             repositories: repositoryNames
//         }
//     }
// }