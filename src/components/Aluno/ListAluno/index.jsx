import { Container, Content, ContentButton, Head, InfoAluno, List, NumeroTitulo } from "./styles";
import IconeEditar from "../../../assets/IconeEditar.svg";
import IconeExcluir from "../../../assets/IconeExcluir.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalDelete } from "../../ModalDelete";
import { useState } from "react";

export function ListInfos({
  Modal,
  dados,
  handleDelete,
  handleCadastroAluno,
  handleEditarAluno,
}) {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredDados = dados.filter((info) =>
    info.nome.toLowerCase().includes(searchValue.toLowerCase())
    ||
    info?.usuario?.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container>
      <Content>
        <ContentButton>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>Cadastrar Aluno </button>
            </Dialog.Trigger>
            <Modal
              handleCadastroAluno={handleCadastroAluno}
              isEditing={false}
            />
          </Dialog.Root>
        </ContentButton>
        <Head>
          <input
            type="text"
            placeholder="Busque por aluno"
            value={searchValue}
            onChange={handleSearchInputChange}
          />
        </Head>
        <List>
          <ul>
            {filteredDados &&
              filteredDados.map((info) => (
                <li key={info.id}>
                  <InfoAluno>
                    <NumeroTitulo>{`Nº título: ${info.usuario}`}</NumeroTitulo>
                    {info.nome}
                  </InfoAluno>
                  <div>
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button>
                          <img src={IconeEditar} alt="Icone Editar" />
                        </button>
                      </Dialog.Trigger>
                      <Modal
                        infoEdit={info}
                        isEditing={true}
                        handleEditarAluno={handleEditarAluno}
                      />
                    </Dialog.Root>

                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button>
                          <img src={IconeExcluir} alt="Icone Excluir" />
                        </button>
                      </Dialog.Trigger>
                      <ModalDelete
                        nome={info.nome}
                        id={info.id}
                        usuario={info.usuario}
                        handleDelete={handleDelete}
                        title="aluno"
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
