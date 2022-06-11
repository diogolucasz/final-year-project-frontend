import { Post } from "../Post";
import { Container } from "./style";

export interface PostProps {
	posts: [
		post: {
			id: number;
			name: string;
			owner: Owner;
			description: string;
			// user_id: string;
		}
	]

}

interface Owner {
	id: number;
	login: string
}

export default function Content({posts}: Post[]) {

	return (
		<Container >
			{posts.map(post => (
				<Post key={post.id} {...post} />
			))}
		</Container>
	)
}