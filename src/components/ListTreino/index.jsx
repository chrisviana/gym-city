import * as Dialog from "@radix-ui/react-dialog";
import IconeEditar from "../../assets/IconeEditar.svg";
import IconeExcluir from "../../assets/IconeExcluir.svg";
import { Container, Content, ContentButton, Head, List } from "./styles";
import { useState } from "react";
import { ModalDelete } from "../ModalDelete";
import { Link } from "react-router-dom";

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

  const filteredDados = dados.filter((grupo) =>
    grupo.descricao.toLowerCase().includes(searchValue.toLowerCase())
  );

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
              filteredDados.map((grupo) => (
                <li key={grupo.id}>
                  {grupo.descricao}
                  <div>
                    <button>
                      <img src={IconeEditar} alt="Icone Editar" />
                    </button>
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button>
                          <img src={IconeExcluir} alt="Icone Excluir" />
                        </button>
                      </Dialog.Trigger>
                      <ModalDelete
                        nome={grupo.descricao}
                        id={grupo.id}
                        handleDelete={handleDeleteExercicio}
                        title="exercício"
                      />
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
