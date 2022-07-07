import { useEffect, useState } from "react";
import Aside from "../../components/Aside";
import Content, { Post } from "../../components/Content";
import { Header } from "../../components/Header";
import { api } from "../../services/apiClient";
import { useFetch } from "../../services/hooks/useFetchPosts";
import { Container } from "./styles";

export default function Feed() {

	// const { data: posts, isLoading, error } = useQuery<Post[]>('posts', async () => {

	// 	const { data } = await api.get('posts')


	// 	console.log(data)
	// 	return data
	// })

	const { data, error, isLoading } = useFetch<Post[]>('posts')

	//const {} = data
	// console.log(posts?.data)

	// if (!data) {
	// 	return <p>Carregando...</p>
	//   }

	// console.log(data)

	// if (!data) {
	// 	console.log('EU')
	// 	return <p>HUEHUEHUE</p>
	// }

	// interface Repository {
	// 	id: string,
	// 	full_name: string
	// }

	// const [repository, setRepositories] = useState<Repository[]>([])

	// useEffect(()=> {
	// 	fetch('https://api.github.com/users/diogolucasz/repos')
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		setRepositories(data)
	// 	})
	// })

	return (
		<Container>
			<Header />
			<main>
				<Aside />
				{/* <Content props={{posts,error,isLoading}} /> */}
				<ul>
					{data?.map(post => {
						return(
							<li key={post.id}>{post.id}</li>
						)
						// <PostItem key={post.id} {...post} />
					})}
				</ul>

			</main>
		</Container>
	)
}