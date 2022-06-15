import axios from "axios";
import { useQuery } from "react-query";
import { api } from "../apiClient";

interface Post {
	id: number;
	message: string;
	subject: string;
	user_id: string;
	// owner: Owner;
}

// export async function getPosts(): Promise<Post[]> {

// 	const { data } = await api.get('posts')

// 	//const data = await response.json()

// 	return data;
// }

// export function useFetchPosts() {
// 	return useQuery('posts', getPosts)
// }