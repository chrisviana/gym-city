import * as Dialog from "@radix-ui/react-dialog";
import { ModalAddTreino } from "../ModalAddTreino";
import { ButtonExercicio } from "./style";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export function ButtonCadastroTreino({ alunoUsuario, setExercicioAluno, adicionarExercicio }) {

  const [existeAluno, setExisteAluno] = useState(false)

  useEffect(() => {
    if (alunoUsuario) {
      setExisteAluno(true);
    } else {
      setExisteAluno(false);
    }
  }, [alunoUsuario]);

  function validaAlunoSelecionado() {
    if (alunoUsuario === undefined || alunoUsuario === "") {
      toast.warning("Selecione um aluno primeiro.");
    } else {
      setExisteAluno(true);
    }
  }
 

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonExercicio onClick={() => validaAlunoSelecionado()}>Adicionar Exercício</ButtonExercicio>
        </Dialog.Trigger>
        {existeAluno && <ModalAddTreino setExercicioAluno={setExercicioAluno} adicionarExercicio={adicionarExercicio}/> }
      </Dialog.Root>
    </div>
  );
}
