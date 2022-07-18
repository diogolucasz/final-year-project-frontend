import { Header } from '../components/Header'
import { Container } from './index/styles'

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <section>
          <span>Bem Vindo</span>
          <h1>Plataforma de ajuda <span>ISLA</span></h1>
          <p>asdmsadosakdoaskdoaskod <br/></p>
        </section>
        
        <img src="/images/coding.svg" height="360" alt="computer" />
      </Container>
    </>
  )
}
