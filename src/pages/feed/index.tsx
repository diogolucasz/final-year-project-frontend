import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useForm } from "react-hook-form";
import { FiLock, FiMail } from "react-icons/fi";
import Aside from "../../components/Aside";
//import { Post } from "../../components/Content";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { PostItem, Post } from "../../components/PostItem";
import { useFetch } from "../../services/hooks/useFetch";
import { Container, Content } from "./styles";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInData } from "../signin";

export default function Feed() {

	const { data, error, isLoading } = useFetch<Post[]>('posts')

	const schema = Yup.object().shape({
		email: Yup.string().required('E-mail obrigatorio').email('Digite um e-mail válido'),
		password: Yup.string().required('Password obrigatoria'),
	})

	const { register, handleSubmit, formState: { errors } } = useForm<SignInData>({
		resolver: yupResolver(schema)
	})

	return (
		<Container>
			<Header />
			<main>
				<Aside />
				<Content>
					<form>
						<Input
							//{...register('email')}
							name="email"
							icon={FiMail}
							placeholder="E-mail"
							error={errors.email}
						/>
						<Input
							//{...register('password')}
							name="password"
							icon={FiLock}
							placeholder="Password"
							error={errors.password}
						/>
						<Input
							//{...register('password')}
							name="password"
							icon={FiLock}
							placeholder="Password"
							error={errors.password}
						/>
					</form>
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
				</Content>
				{/* <div>

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
				</div> */}

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