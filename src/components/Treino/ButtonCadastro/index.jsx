import * as Dialog from "@radix-ui/react-dialog";
import { ModalAddTreino } from "../ModalAddTreino";
import { ButtonExercicio } from "./style";

export function ButtonCadastroTreino({ setTreino, adicionarTreino, treino }) {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonExercicio>Adicionar Exercício</ButtonExercicio>
        </Dialog.Trigger>
        <ModalAddTreino setTreino={setTreino} adicionarTreino={adicionarTreino} treino={treino}/>
        </Dialog.Root>
    </div>
  )
}