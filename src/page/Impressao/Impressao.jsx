import { useContext, useEffect, useState } from "react";
import { TreinoContext } from "../../contexts/TreinoContext";
import { TdTreino } from "./style";

export function Impressao({
  exercicios,
  aluno,
  instrutor,
  observacoes,
  selectedTreino,
  exerciciosCadastrados
}) {
  const { getExercicioTreinoById } = useContext(TreinoContext);

  // const [exerciciosCadastrados, setExerciciosCadastrados] = useState();
  const [treinoA, setTreinoA] = useState([]);
  const [treinoB, setTreinoB] = useState([]);
  const [treinoC, setTreinoC] = useState([]);
  const [treinoD, setTreinoD] = useState([]);
  const [treinoE, setTreinoE] = useState([]);

  useEffect(() => {
    if (exerciciosCadastrados) {
      const sortedExercicios = [...exerciciosCadastrados].sort((a, b) => {
        const aSeconds = a.dataHora?.seconds || 0;
        const bSeconds = b.dataHora?.seconds || 0;
        return aSeconds - bSeconds; // Sort in ascending order
      });

      setTreinoA([]);
      setTreinoB([]);
      setTreinoC([]);
      setTreinoD([]);
      setTreinoE([]);

      sortedExercicios.forEach((exercicio) => {
        if (exercicio?.selectTab === "treinoA") {
          setTreinoA((prevTreinoA) => [...prevTreinoA, exercicio]);
        }

        if (exercicio?.selectTab === "treinoB") {
          setTreinoB((prevTreinoB) => [...prevTreinoB, exercicio]);
        }

        if (exercicio?.selectTab === "treinoC") {
          setTreinoC((prevTreinoC) => [...prevTreinoC, exercicio]);
        }

        if (exercicio?.selectTab === "treinoD") {
          setTreinoD((prevTreinoD) => [...prevTreinoD, exercicio]);
        }

        if (exercicio?.selectTab === "treinoE") {
          setTreinoE((prevTreinoE) => [...prevTreinoE, exercicio]);
        }
      });
    }
  }, [exerciciosCadastrados]);

  return (
    <>
      <p>ALUNO: {aluno}</p>
      <p>INSTRUTOR(A): {instrutor} </p>
      <p>OBS: {observacoes} </p>

      {selectedTreino === "Treino A" && treinoA.length > 0 && (
        <>
          <br />
          <br />
          <p>TREINO A:</p>
          <table>
            <thead>
              <tr>
                <td style={{ width: 100 }}>EXERCÍCIO</td>
                <td>S</td>
                <td>REP/TEMP</td>
                <td>DESC</td>
              </tr>
            </thead>

            {treinoA.length > 0 &&
              treinoA.map((treino) => {
                return (
                  <tbody  key={treino.id}>
                    <tr>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "left",
                          width: 100,
                        }}
                      >
                        {treino.exercicio}
                      </td>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "right",
                        }}
                      >
                        {treino.series}
                      </td>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "center",
                        }}
                      >
                        {treino.reptemp}
                      </td>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "right",
                        }}
                      >
                        {treino.descanso}'s
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </>
      )}

      {selectedTreino === "Treino B" && treinoB.length > 0 && (
        <>
          <br />
          <br />
          <p>TREINO B:</p>
          <table>
            <thead>
              <tr>
                <td style={{ width: 100 }}>EXERCÍCIO</td>
                <td>S</td>
                <td>REP/TEMP</td>
                <td>DESC</td>
              </tr>
            </thead>

            {treinoB &&
              treinoB.map((treino) => {
                return (
                  <tbody key={treino.id}>
                    <tr >
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "left",
                          width: 100,
                        }}
                      >
                        {treino.exercicio}
                      </td>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "right",
                        }}
                      >
                        {treino.series}
                      </td>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "center",
                        }}
                      >
                        {treino.reptemp}
                      </td>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "right",
                        }}
                      >
                        {treino.descanso}'s
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </>
      )}

      {selectedTreino === "Treino C" && treinoC.length > 0 && (
        <>
          <br />
          <br />
          <p>TREINO C:</p>
          <table>
            <thead>
              <tr>
                <td style={{ width: 100 }}>EXERCÍCIO</td>
                <td>S</td>
                <td>REP/TEMP</td>
                <td>DESC</td>
              </tr>
            </thead>

            {treinoC &&
              treinoC.map((treino) => {
                return (
                  <tbody key={treino.id}>
                    <tr >
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "left",
                          width: 100,
                        }}
                      >
                        {treino.exercicio}
                      </td>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "right",
                        }}
                      >
                        {treino.series}
                      </td>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "center",
                        }}
                      >
                        {treino.reptemp}
                      </td>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "right",
                        }}
                      >
                        {treino.descanso}'s
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </>
      )}

      {selectedTreino === "Treino D" && treinoD.length > 0 && (
        <>
          <br />
          <br />
          <p>TREINO D:</p>
          <table>
            <thead>
              <tr>
                <td style={{ width: 100 }}>EXERCÍCIO</td>
                <td>S</td>
                <td>REP/TEMP</td>
                <td>DESC</td>
              </tr>
            </thead>

            {treinoD &&
              treinoD.map((treino) => {
                return (
                  <tbody key={treino.id}> 
                    <tr >
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "left",
                          width: 100,
                        }}
                      >
                        {treino.exercicio}
                      </td>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "right",
                        }}
                      >
                        {treino.series}
                      </td>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "center",
                        }}
                      >
                        {treino.reptemp}
                      </td>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "right",
                        }}
                      >
                        {treino.descanso}'s
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </>
      )}

      {selectedTreino === "Treino E" && treinoE.length > 0 && (
        <>
          <br />
          <br />
          <p>TREINO E:</p>
          <table>
            <thead>
              <tr>
                <td style={{ width: 100 }}>EXERCÍCIO</td>
                <td>S</td>
                <td>REP/TEMP</td>
                <td>DESC</td>
              </tr>
            </thead>

            {treinoE &&
              treinoE.map((treino) => {
                return (
                  <tbody key={treino.id}>
                    <tr>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "left",
                          width: 100,
                        }}
                      >
                        {treino.exercicio}
                      </td>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "right",
                        }}
                      >
                        {treino.series}
                      </td>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "center",
                        }}
                      >
                        {treino.reptemp}
                      </td>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "right",
                        }}
                      >
                        {treino.descanso}'s
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </>
      )}
    </>
  );
}
