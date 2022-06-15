import { useQuery } from "react-query";
import { api } from "../../services/apiClient";
import { PostItem } from "../Post";
import { Container } from "./style";

export interface Post {
	id: number;
	message: string;
	subject: string;
	user_id: string;
	// owner: Owner;
}

export default function Content() {

	const { data: posts, isLoading, error } = useQuery<Post[]>('posts', async () => {

		const { data } = await api.get('posts')

		//const data = await response.json()

		console.log(data)
		return data;
	})


	return (
		<Container >
			{isLoading ? (
				<h1>good</h1>
			) : error ? (
				<h1>errp</h1>
			) : (
				<>
					{posts?.map(post => {
						<PostItem key={post.id} {...post}/>
					})}
				</>
			)}		
		</Container>
	)
}