
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Aside from "../../components/Aside";
import Content from "../../components/Content";
import { Header } from "../../components/Header";
import { useFetchPosts } from "../../services/hooks/useFetchPosts";
import { Container } from "./styles";


export default function Feed() {

	const { data, isLoading, error } = useFetchPosts()

	// console.log(data)

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