import { useContext, useEffect, useState } from "react";
import { TreinoContext } from "../../contexts/TreinoContext";
import { TdTreino } from "./style";

export function Impressao({ exercicios, aluno, instrutor }) {
  const { getExercicioTreinoById } = useContext(TreinoContext);

  const [exerciciosCadastrados, setExerciciosCadastrados] = useState();
  const [treinoA, setTreinoA] = useState([]);
  const [treinoB, setTreinoB] = useState([]);
  const [treinoC, setTreinoC] = useState([]);
  const [treinoD, setTreinoD] = useState([]);
  const [treinoE, setTreinoE] = useState([]);

  useEffect(() => {
    if (exercicios) {
      const fetchData = async () => {
        const responseArray = await Promise.all(
          exercicios.map(async (exercioId) => {
            const response = await getExercicioTreinoById(exercioId);
            return response;
          })
        );
        setExerciciosCadastrados(responseArray);
      };

      fetchData();
    }
  }, [exercicios]);

  useEffect(() => {
    if (exerciciosCadastrados) {
      setTreinoA([]);
      setTreinoB([]);
      setTreinoC([]);
      setTreinoD([]);
      setTreinoE([]);
      exerciciosCadastrados.map((exercicio) => {
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
      <p>OBS: </p>

      {treinoA && (
        <>
          <p>TREINO A:</p>
          <table>
            <thead>
              <td style={{width: 100}}>EXERCÍCIO</td>
              <td>S</td>
              <td>REP/TEMP</td>
              <td>DESC</td>
            </thead>

            {treinoA.length > 0 &&
              treinoA.map((treino) => {
                return (
                  <tbody>
                    <tr>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "left",
                          width: 100
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
      {treinoB.length > 0 &&  (
        <>
          <p>TREINO B:</p>
          <table>
            <thead>
              <td  style={{width: 100}}>EXERCÍCIO</td>
              <td>S</td>
              <td>REP/TEMP</td>
              <td>DESC</td>
            </thead>

            {treinoB &&
              treinoB.map((treino) => {
                return (
                  <tbody>
                    <tr>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "left",
                          width: 100
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
      {treinoC.length > 0 &&  (
        <>
          <p>TREINO C:</p>
          <table>
            <thead>
              <td style={{width: 100}}>EXERCÍCIO</td>
              <td>S</td>
              <td>REP/TEMP</td>
              <td>DESC</td>
            </thead>

            {treinoC &&
              treinoC.map((treino) => {
                return (
                  <tbody>
                    <tr>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "left",
                          width: 100
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
      {treinoD.length > 0 &&  (
        <>
          <p>TREINO D:</p>
          <table>
            <thead>
              <td style={{width: 100}}>EXERCÍCIO</td>
              <td>S</td>
              <td>REP/TEMP</td>
              <td>DESC</td>
            </thead>

            {treinoD &&
              treinoD.map((treino) => {
                return (
                  <tbody>
                    <tr>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "left",
                          width: 100
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
      {treinoE.length > 0 &&  (
        <>
          <p>TREINO E:</p>
          <table>
            <thead>
              <td style={{width: 100}}>EXERCÍCIO</td>
              <td>S</td>
              <td>REP/TEMP</td>
              <td>DESC</td>
            </thead>

            {treinoE &&
              treinoE.map((treino) => {
                return (
                  <tbody>
                    <tr>
                      <td
                        style={{
                          borderBottom: "2px dotted #000",
                          textAlign: "left",
                          width: 100
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
