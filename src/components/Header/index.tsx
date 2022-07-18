import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ActiveLink } from "../ActiveLink";
import { ButtonsArea, Container, Content, UserController, UserInfo } from "./styles";
import { FaBeer } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri'
import Button from "../Button";
import Link from "next/link";


export function Header() {

    const { user, signOut } = useContext(AuthContext);

    return (
        <Container>
            <Content>
                <ActiveLink activeClassName="active" href='/feed'>
                    <img src="/images/logo.png" height={80} alt="logo ISLA" />
                </ActiveLink>
                <nav>
                    {
                        !user ? (
                            <ActiveLink activeClassName="active" href='/feed'>
                                <a>Novidades</a>
                            </ActiveLink>
                        ) : null
                    }
                    {
                        !user ? (
                            <ActiveLink activeClassName="active" href='/feed'>
                                <a>Actualizações</a>
                            </ActiveLink>
                        ) : null
                    }
                    {
                        user ? (
                            <ActiveLink activeClassName="active" href='/feed'>
                                <a>Feed</a>
                            </ActiveLink>
                        ) : null
                    }
                    {
                        user ? (
                            <ActiveLink activeClassName="active" href='/profile'>
                                <a>Perfil</a>
                            </ActiveLink>
                        ) : null
                    }
                    <ActiveLink activeClassName="active" href='/dashboard'>
                        <a>LINK 2</a>
                    </ActiveLink>
                </nav>
                <UserController>

                    <ButtonsArea>
                        <button onClick={signOut}>
                            <FaBeer />
                        </button>
                        <button type="button">
                            <RiAdminLine />
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
                    ) : (
                        <Button>
                            <Link href="/signin">
                                <a>Iniciar seção</a>
                            </Link>
                        </Button>
                    )}

                </UserController>
            </Content>
        </Container>
    )
}