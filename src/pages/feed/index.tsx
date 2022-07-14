import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Aside from "../../components/Aside";
//import { Post } from "../../components/Content";
import { Header } from "../../components/Header";
import { PostItem, Post } from "../../components/PostItem";
import { useFetch } from "../../services/hooks/useFetch";
import { Container } from "./styles";

export default function Feed() {

	const { data, error, isLoading } = useFetch<Post[]>('posts')

	return (
		<Container>
			<Header />
			<main>
				<Aside />
				<div>

					{isLoading ? (
						<h1>good</h1>
					) : error ? (
						<h1>errp</h1>
					) : (
						<>
							{data?.map(post => {
								return (
									<PostItem key={post.id} {...post} />
								)
							})}
						</>
					)}
				</div>

			</main>
		</Container>
	)

}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

	const cookies = parseCookies(ctx);

	if (!cookies['fyp.token']) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

	return {
		props: {}
	}
}