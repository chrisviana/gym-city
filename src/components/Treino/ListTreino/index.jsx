import { Cabecalho, ListExercicio, Table } from "./style";
import IconeEditar from "../../../assets/IconeEditar.svg";
import IconeExcluir from "../../../assets/IconeExcluir.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalEditTreino } from "../ModalEditTreino";
import { ModalDelete } from "../../ModalDelete";

export function LisTreino({ exercicioAluno, atualizarListaTreinos, deleteExercicioTreinoId, setIsEditing }) {
  return (
    <Table>
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
        {exercicioAluno &&
          exercicioAluno.map((exercicio, index) => {
            return (
              <tr key={index}>
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
                    <ModalEditTreino
                      exercicio={exercicio}
                      atualizarLista={atualizarListaTreinos}
                      setIsEditing={setIsEditing}
                    />
                  </Dialog.Root>

                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <button>
                        <img src={IconeExcluir} alt="Ícone Excluir" />
                      </button>
                    </Dialog.Trigger>
                    <ModalDelete
                      nome={exercicio.exercicio}
                      id={exercicio.id}
                      handleDelete={deleteExercicioTreinoId}
                      title="exercício"
                    />
                  </Dialog.Root>
                </td>
              </tr>
            );
          })}
      </ListExercicio>
    </Table>
  );
}
