import { Cabecalho, ListExercicio } from "./style";
import IconeEditar from "../../../assets/IconeEditar.svg";
import IconeExcluir from "../../../assets/IconeExcluir.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalAddTreino } from "../ModalAddTreino";

export function LisTreino({ treino, setTreino, adicionarTreino }) {
  return (
    <>
      <Cabecalho>
        <tr>
          <th>Execício</th>
          <th>Séries</th>
          <th>Repetição</th>
          <th>Carga</th>
          <th>Descanso</th>
          <th></th>
          <th></th>
        </tr>
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
                        <img src={IconeEditar} alt="Ícone Editar" />
                      </button>
                    </Dialog.Trigger>
                    <ModalAddTreino
                      setTreino={setTreino}
                      adicionarTreino={adicionarTreino}
                      treinoEditado={treino}
                      isEditig={true}
                    />
                  </Dialog.Root>

                  <button>
                    <img src={IconeExcluir} alt="Ícone Excluir" />
                  </button>
                </td>
              </tr>
            );
          })}
      </ListExercicio>
    </>
  );
}
