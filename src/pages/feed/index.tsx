
import Aside from "../../components/Aside";
import Content from "../../components/Content";
import { Header } from "../../components/Header";
import { useFetchPosts } from "../../services/hooks/useFetchPosts";
import { Container } from "./styles";


export default function Feed() {

	const { data, isLoading, error } = useFetchPosts()

	return (
		<Container>
			<Header />
			<main>
				<Aside />

				{isLoading ? (
					<h1>isLoading</h1>
				) : error ? (
					<h1>error</h1>
				) : (
					<>
						<h1>SUCESSO</h1>
						<Content posts={data} />
					</>
				)}

			</main>
		</Container>
	)
}

//https://www.youtube.com/watch?v=-fSHcMg5aZ8&list=PLLSLan7jhsAsMwIcv-Wp33n_wUZD3qN_R&index=1