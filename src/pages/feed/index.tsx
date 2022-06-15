import Aside from "../../components/Aside";
import Content from "../../components/Content";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export default function Feed() {

	return (
		<Container>
			<Header />
			<main>
				<Aside />
				<Content />
			</main>
		</Container>
	)
}