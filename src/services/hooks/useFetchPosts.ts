import useSWR from "swr";
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

export function useFetch<Data = any, Error = any>(url: string) {

	const { data, error, mutate } = useSWR<Data, Error>(url, async url => {

		const response = await api.get(url);

		return response.data;
	})

	return { data, isLoading: !error && !data, error, mutate }
}