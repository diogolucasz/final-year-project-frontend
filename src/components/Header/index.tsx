import Link from "next/link";
import { useRouter } from "next/router";
import { ActiveLink } from "../ActiveLink";
import { Container, Content } from "./styles";

export function Header() {


    return (
        <Container>
            <Content>
                <div>LOGO</div>
                <nav>
                    <ActiveLink activeClassName="active" href='/'>
                        <a>LINK 1</a>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href='/posts'>
                        <a>LINK 2</a>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href='/dashboard'>
                        <a>LINK 2</a>
                    </ActiveLink>
                </nav>
            </Content>
        </Container>
    )
}