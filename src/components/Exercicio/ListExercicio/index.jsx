import * as Dialog from "@radix-ui/react-dialog";
import IconeEditar from "../../../assets/IconeEditar.svg";
import IconeExcluir from "../../../assets/IconeExcluir.svg";
import { Container, Content, ContentButton, Head, List } from "./styles";
import { ModalExercicio } from "../ModalExercicio";
import { useState } from "react";
import { ModalDelete } from "../../ModalDelete";

export function ListExercicio({
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
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>Cadastrar Exercício </button>
            </Dialog.Trigger>
            <ModalExercicio
              isEditing={false}
              handleCadastroExercicio={handleCadastroExercicio}
              getGrupo={getGrupo}
            />
          </Dialog.Root>
        </ContentButton>
        <Head>
          <input
            type="text"
            placeholder="Busque por um exercício"
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
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button>
                          <img src={IconeEditar} alt="Icone Editar" />
                        </button>
                      </Dialog.Trigger>
                      <ModalExercicio
                        infoEdit={grupo}
                        isEditing={true}
                        handleEditarExercicio={handleEditarExercicio}
                        getGrupo={getGrupo}
                      />
                    </Dialog.Root>

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
