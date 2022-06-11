import { useQuery } from "react-query";

export interface Post {
	post: {
		id: number;
		name: string;
		owner: Owner;
		description: string;
		// user_id: string;
	}
}

interface Owner {
	id: number;
	login: string
}

async function getPosts():Promise<Post[]> {

    const response = await fetch('https://api.github.com/users/diogolucasz/repos');

    const data = await response.json();

    return data;

}

export function useFetchPosts() {
    return useQuery('posts', getPosts)
}