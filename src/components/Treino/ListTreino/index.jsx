import { Cabecalho, ListExercicio } from "./style";
import IconeEditar from "../../../assets/IconeEditar.svg";
import IconeExcluir from "../../../assets/IconeExcluir.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalAddTreino } from "../ModalAddTreino";

export function LisTreino() {
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
      </ListExercicio>
    </>
  );
}
