
import Aside from "../../components/Aside";
import Content from "../../components/Content";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export default function Feed() {
	return (
		<Container>
			<Header/>
			<main>
				<Aside />
				<Content />
			</main>
		</Container>
	)
}

//https://www.youtube.com/watch?v=-fSHcMg5aZ8&list=PLLSLan7jhsAsMwIcv-Wp33n_wUZD3qN_R&index=1