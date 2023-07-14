import * as Dialog from "@radix-ui/react-dialog";
import { ModalAddTreino } from "../ModalAddTreino";
import { ButtonExercicio } from "./style";

export function ButtonCadastroTreino() {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonExercicio>Adicionar Exercício</ButtonExercicio>
        </Dialog.Trigger>
        <ModalAddTreino
        />
      </Dialog.Root>
    </div>
  );
}
