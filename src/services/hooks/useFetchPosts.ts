import { useQuery } from "react-query";
import { api } from "../apiClient";

interface Post {
	id: number;
	message: string;
	subject: string;
	user_id: string;
	// owner: Owner;
}

export async function getPosts(): Promise<Post[]> {

	const { data } = await api.get('posts')

	//const data = await response.json();
	// console.log(data)

	console.log(data)

	const posts = data.map(post => {
		return {
			id: post.id,
			subject: post.subject,
			message: post.message,
			user_id: post.user_id
		}
	})

	return posts;
}

export function useFetchPosts() {
	return useQuery('posts', getPosts)
}