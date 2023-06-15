import * as Dialog from "@radix-ui/react-dialog";
import { Content, Overlay, Close, Title, ButtonYes, Options } from "./style";

export function ModalDelete({ nome, id, handleDelete, title }) {
  const closeModal = () => {
    document.getElementById("closeModal").click();
  };

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close id="closeModal">X</Close>
        <Title>
          Deseja realmente excluir o {title} {nome}
        </Title>
        <Options>
          <ButtonYes yes onClick={() => handleDelete(id)}>
            Sim
          </ButtonYes>
          <ButtonYes onClick={closeModal}>Não</ButtonYes>
        </Options>
      </Content>
    </Dialog.Portal>
  );
}
