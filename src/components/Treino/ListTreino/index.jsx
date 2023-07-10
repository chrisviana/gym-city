import { Cabecalho, ListExercicio } from "./style";
import IconeEditar from "../../../assets/IconeEditar.svg";
import IconeExcluir from "../../../assets/IconeExcluir.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalAddTreino } from "../ModalAddTreino";

export function LisTreino({ treino,  setTreino }) {
  return (
    <>
      <Cabecalho>
        <thead>
          <tr>
            <th>Execício</th>
            <th>Séries</th>
            <th>Repetição</th>
            <th>Carga</th>
            <th>Descanso</th>
            <th></th>
          </tr>
        </thead>
      </Cabecalho>
      <ListExercicio>
        {treino &&
          treino.exercicios.map((exercicio) => {
            return (
              <tr>
                <td>{exercicio.exercicio}</td>
                <td>{exercicio.series}</td>
                <td>{exercicio.reptemp}</td>
                <td>{exercicio.carga}kg</td>
                <td>{exercicio.descanso}s</td>
                <td>
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <button>
                        <img src={IconeEditar} alt="Icone Excluir" />
                      </button>
                    </Dialog.Trigger>
                    <ModalAddTreino
                      infoEdit={treino}
                      isEditing={true}
                      setTreino={setTreino}
                    />
                  </Dialog.Root>
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <button>
                        <img src={IconeExcluir} alt="Icone Excluir" />
                      </button>
                    </Dialog.Trigger>
                  </Dialog.Root>
                </td>
              </tr>
            );
          })}
      </ListExercicio>
    </>
  );
}
