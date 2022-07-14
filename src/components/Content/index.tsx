import { PostItem } from "../PostItem";
import { Container } from "./style";

export interface Post {
	id: number;
	message: string;
	subject: string;
	user_id: string;
	// owner: Owner;
}

interface ContentProps {
	posts: Post[],
	isLoading: boolean,
	error: string
}

export default function Content({ posts, error, isLoading }: ContentProps) {

	// const { data: posts, isLoading, error } = useQuery<Post[]>('posts', async () => {

	// 	const { data } = await api.get('posts')

	// 	//const data = await response.json()

	// 	console.log(data)
	// 	return data;
	// })

	// const { data,error } = useFetch('posts')

	// // console.log(posts?.data)

	// const posts = data?.data;

	// if(!posts) {
	// 	console.log('EU')
	// 	return <p>HUEHUEHUE</p>
	// }

	// const isLoading = !error && !posts

	return (
		<Container >
			{isLoading ? (
				<h1>good</h1>
			) : error ? (
				<h1>errp</h1>
			) : (
				<>
					{posts?.map(post => {
						return (
							// <li key={post.id}>{post.id}</li>
							<PostItem key={post.id} {...post} />
						)
						// <PostItem key={post.id} {...post} />
					})}
				</>
			)}
		</Container>
	)
}