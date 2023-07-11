import { Container, Content, ContentButton, Head, InfoAluno, List, NumeroTitulo } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import IconeEditar from '../../assets/IconeEditar.svg'
import IconeExcluir from '../../assets/IconeExcluir.svg'
import * as Dialog from "@radix-ui/react-dialog";

export function ListTreino({
  dados,
  handleCadastroExercicio,
  handleDeleteExercicio,
  handleEditarExercicio,
  getGrupo,
}) {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredDados = dados.filter((treino) =>
    treino.aluno.toLowerCase().includes(searchValue.toLowerCase()) ||
    treino.usuario.toLowerCase().includes(searchValue.toLowerCase()) 
  );

  const handleEditarClick = (treino) => {
    // Chamar a página de edição com o treino
    // Você pode fazer isso usando o componente Link do React Router DOM
  };

  return (
    <Container>
      <Content>
        <ContentButton>
          <Link to="/app/treino/cadastro">
            <button>Cadastrar Treino</button>
          </Link>
        </ContentButton>
        <Head>
          <input
            type="text"
            placeholder="Busque por um aluno ou título"
            onChange={handleSearchInputChange}
            value={searchValue}
          />
        </Head>
        <List>
          <ul>
            {filteredDados &&
              filteredDados.map((treino) => (
                <li key={treino.id}>
                   <InfoAluno>
                    <NumeroTitulo>{`Nº título: ${treino.usuario}`}</NumeroTitulo>
                    {treino.aluno}
                  </InfoAluno>
                  <div>
                  <Link to={`/app/treino/cadastro/${treino.id}`}>
                      <button onClick={() => handleEditarClick(treino)}>
                        <img src={IconeEditar} alt="Ícone Editar" />
                      </button>
                    </Link>
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button>
                          <img src={IconeExcluir} alt="Icone Excluir" />
                        </button>
                      </Dialog.Trigger>
                      {/* <ModalDelete
                        nome={treino.aluno}
                        id={treino.id}
                        handleDelete={handleDeleteExercicio}
                        title="exercício"
                      /> */}
                    </Dialog.Root>
                  </div>
                </li>
              ))}
          </ul>
        </List>
      </Content>
    </Container>
  );
}
