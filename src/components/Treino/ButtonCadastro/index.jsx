import * as Dialog from "@radix-ui/react-dialog";
import { ModalAddTreino } from "../ModalAddTreino";
import { ButtonExercicio } from "./style";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export function ButtonCadastroTreino({ alunoUsuario, setExercicioAluno, adicionarExercicio , atualizarLista,treino }) {

  const [existeAluno, setExisteAluno] = useState(false)

  useEffect(() => {
    if (alunoUsuario) {
      setExisteAluno(true);
    } else {
      setExisteAluno(false);
    }
  }, [alunoUsuario]);

  function validaAlunoSelecionado() {
    if (!treino || treino === "") {
      toast.warning("É necessario salvar primeiro o treino.");
      return false;
    } 
  }
 

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonExercicio onClick={() => validaAlunoSelecionado()}>Adicionar Exercício</ButtonExercicio>
        </Dialog.Trigger>
        {existeAluno && treino &&  <ModalAddTreino setExercicioAluno={setExercicioAluno} adicionarExercicio={adicionarExercicio} atualizarLista={atualizarLista}/> }
      </Dialog.Root>
    </div>
  );
}
