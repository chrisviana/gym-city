import { Container, Content, ContentButton, Head, List } from "./styles";
import IconeEditar from "../../assets/IconeEditar.svg";
import IconeExcluir from "../../assets/IconeExcluir.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalDelete } from "../ModalDelete";
import { useState } from "react";

export function ListInfos({ nameButton, Modal, dados, handleDeleteAluno }) {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredDados = dados.filter((info) =>
    info.nome.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container>
      <Content>
        <ContentButton>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>Cadastrar {nameButton} </button>
            </Dialog.Trigger>
            <Modal />
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
                  {info.nome}
                  <div>
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button>
                          <img src={IconeEditar} alt="Icone Editar" />
                        </button>
                      </Dialog.Trigger>
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
                        handleDeleteAluno={handleDeleteAluno}
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
