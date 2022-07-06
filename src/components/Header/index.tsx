import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ActiveLink } from "../ActiveLink";
import { ButtonsArea, Container, Content, UserController, UserInfo } from "./styles";
import { FaBeer } from 'react-icons/fa';


export function Header() {

    const { user, signOut } = useContext(AuthContext);

    return (
        <Container>
            <Content>
                <img src="/images/logo.png" height={80} alt="logo ISLA" />
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
                <UserController>
                    <>
                        <ButtonsArea>
                            <button type="button">
                                <FaBeer />
                            </button>
                        </ButtonsArea>
                        {user ? (
                            <UserInfo>
                                <span>Bem-vindo,</span>
                                <div>
                                    <strong>{user?.name}</strong>
                                    <span>{user?.email}</span>
                                </div>
                            </UserInfo>
                        ) : null}
                    </>
                </UserController>
            </Content>
        </Container>
    )
}