import { withSSRAuth } from "../utilities/withSSRAuth"
import { setupAPIClient } from "../services/api";

export default function Teste() {
    return(
        <div>teste</div>
    )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {

   const apiClient = setupAPIClient(ctx);

   const response = await apiClient.get('/me')


    return {
        props: {}
    }
}, {
    permissions: ['metrics.lisdfgfdgt'],
    roles: ['administrator'],
})