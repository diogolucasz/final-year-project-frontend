import useSWR from "swr";
import { api } from "../apiClient";

export function useFetch<Data = any, Error = any>(url: string) {

	const { data, error, mutate } = useSWR<Data, Error>(url, async url => {

		const response = await api.get(url);

		return response.data;
	})

	return { data, isLoading: !error && !data, error, mutate }
}