import { PostItem } from "../Post";
import { Container } from "./style";

export interface Post {
	id: number;
	message: string;
	subject: string;
	user_id: string;
	// owner: Owner;
}

// interface Owner {
// 	id: number;
// 	login: string
// }

export default function Content(posts: Post[]) {

	return (
		<Container >
			{/* {posts.map(post => (
				<PostItem key={post.id} {...post} />
			))} */}
		</Container>
	)
}