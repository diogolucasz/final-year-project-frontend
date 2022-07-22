import { withSSRAuth } from "../utilities/withSSRAuth"
import { setupAPIClient } from "../services/api";

export default function Teste() {
    return(
        <div>teste</div>
    )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {

    return {
        props: {}
    }
}, {
    permissions: ['users.list'],
    roles: ['administrator'],
})


