import { Container, Content, FormLogin } from './style'
import Logo from '../../assets/Logo.png'
import { Button } from '../../components/ui/button'

export function Login() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo Academia" />
        <FormLogin>
          <span>Acesse sua conta</span>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <Button title="Acessar" />
        </FormLogin>
      </Content>
    </Container>
  )
}
