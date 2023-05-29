import { Container, Content, ContentButton, Head } from "./styles";
import IconeBuscar from "../../assets/IconeBuscar.svg";

export function ListInfos() {
  return (
    <Container>
      <Content>
        <ContentButton>
          <button>Cadastrar</button>
        </ContentButton>
        <Head>
          <input type="text" placeholder="Busque por aluno" />
          <button>Buscar</button>
        </Head>
        <div className="lista-nomes">
          <ul>
            <li>Nome 1</li>
            <li>Nome 2</li>
            <li>Nome 3</li>
            <li>Nome 4</li>
          </ul>
        </div>
      </Content>
    </Container>
  );
}
