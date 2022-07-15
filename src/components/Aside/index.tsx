import { ProfilePanel } from "../ProfilePanel";
import SocialPanel from "../SocialPanel";
import { Container } from "./styles";

export default function Content() {
	return (
		<Container>
			<ProfilePanel />
			<SocialPanel />
		</Container>
	);
};

