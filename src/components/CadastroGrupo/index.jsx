import * as Dialog from "@radix-ui/react-dialog";

export function CadastroGrupo() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title>Cadastro de Grupo</Dialog.Title>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
