import { Cabecalho, ListExercicio } from "./style";

export function LisTreino({ treino }) {
  return (
    <>
      <Cabecalho>
        <ul>
          <li>Execício</li>
          <li>Séries</li>
          <li>Repetição</li>
          <li>Carga</li>
          <li>Descanso</li>
        </ul>
      </Cabecalho>
      <ListExercicio>
        {treino &&
          treino.exercicios.map((exercicio) => {
            return (
              <ul>
                <li>{exercicio.exercicio}</li>
                <li>{exercicio.series}</li>
                <li>{exercicio.reptemp}</li>
                <li>{exercicio.carga}kg</li>
                <li>{exercicio.descanso}s</li>
              </ul>
            );
          })}
      </ListExercicio>
    </>
  );
}
