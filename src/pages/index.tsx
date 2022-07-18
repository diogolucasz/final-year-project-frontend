import Image from 'next/image'
import { Header } from '../components/Header'
import { ButtonHome, Container } from './index/styles'

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <main>
          <h1>Plataforma de estudo ISLA - IPGT</h1>
          <p>Projecto com o foco de cada aluno desenvolver o seu <span>&lt;Plano/&gt;</span> de desenvolvimento</p>
          <ButtonHome>Sabe mais sobre o projecto!</ButtonHome>
        </main>
        <Image src="/images/coding.svg" height="360" width="400" alt="computer" />
      </Container>
    </>
  )
}
