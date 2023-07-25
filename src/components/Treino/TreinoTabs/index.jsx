import { ButtonTabs, ContentTabs, ListTabs, RootTabs } from "./style";
import { ButtonCadastroTreino } from "../ButtonCadastro";
import { LisTreino } from "../ListTreino";
import { useContext, useEffect, useState } from "react";
import { TreinoContext } from "../../../contexts/TreinoContext";

export function TreinoTabs({
  alunoUsuario,
  setExercicioAluno,
  adicionarExercicio,
  exercicios,
  setSelectTab,
  atualizarListaTreinos,
  deleteExercicioTreinoId,
  setIsEditing,
  treino,
  selectTab
}) {
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
    <RootTabs className="TabsRoot" value={selectTab} onValueChange={setSelectTab}>
      <ListTabs className="TabsList" aria-label="Manage your account">
        <ButtonTabs
          className="TabsTrigger"
          value="treinoA"
        >
          Treino A
        </ButtonTabs>
        <ButtonTabs
          className="TabsTrigger"
          value="treinoB"
        >
          Treino B
        </ButtonTabs>
        <ButtonTabs
          className="TabsTrigger"
          value="treinoC"
        >
          Treino C
        </ButtonTabs>
        <ButtonTabs
          className="TabsTrigger"
          value="treinoD"
        >
          Treino D
        </ButtonTabs>
        <ButtonTabs
          className="TabsTrigger"
          value="treinoE"
        >
          Treino E
        </ButtonTabs>
      </ListTabs>
      <ContentTabs value="treinoA">
        <LisTreino
          atualizarListaTreinos={atualizarListaTreinos}
          exercicioAluno={treinoA}
          deleteExercicioTreinoId={deleteExercicioTreinoId}
          setIsEditing={setIsEditing}
        />
        <ButtonCadastroTreino
          alunoUsuario={alunoUsuario}
          setExercicioAluno={setExercicioAluno}
          adicionarExercicio={adicionarExercicio}
          atualizarLista={atualizarListaTreinos}
          treino={treino}
        />
      </ContentTabs>
      <ContentTabs value="treinoB">
        <LisTreino
          exercicioAluno={treinoB}
          atualizarListaTreinos={atualizarListaTreinos}
          deleteExercicioTreinoId={deleteExercicioTreinoId}
          setIsEditing={setIsEditing}
        />
        <ButtonCadastroTreino
          alunoUsuario={alunoUsuario}
          setExercicioAluno={setExercicioAluno}
          adicionarExercicio={adicionarExercicio}
          atualizarLista={atualizarListaTreinos}
          treino={treino}
        />
      </ContentTabs>
      <ContentTabs value="treinoC">
        <LisTreino
          exercicioAluno={treinoC}
          atualizarListaTreinos={atualizarListaTreinos}
          deleteExercicioTreinoId={deleteExercicioTreinoId}
          setIsEditing={setIsEditing}
        />
        <ButtonCadastroTreino
          alunoUsuario={alunoUsuario}
          setExercicioAluno={setExercicioAluno}
          adicionarExercicio={adicionarExercicio}
          atualizarLista={atualizarListaTreinos}
          treino={treino}
        />
      </ContentTabs>
      <ContentTabs value="treinoD">
        <LisTreino
          exercicioAluno={treinoD}
          atualizarListaTreinos={atualizarListaTreinos}
          deleteExercicioTreinoId={deleteExercicioTreinoId}
          setIsEditing={setIsEditing}
        />
        <ButtonCadastroTreino
          alunoUsuario={alunoUsuario}
          setExercicioAluno={setExercicioAluno}
          adicionarExercicio={adicionarExercicio}
          atualizarLista={atualizarListaTreinos}
          treino={treino}
        />
      </ContentTabs>
      <ContentTabs value="treinoE">
        <LisTreino
          exercicioAluno={treinoE}
          atualizarListaTreinos={atualizarListaTreinos}
          deleteExercicioTreinoId={deleteExercicioTreinoId}
          setIsEditing={setIsEditing}
        />
        <ButtonCadastroTreino
          alunoUsuario={alunoUsuario}
          setExercicioAluno={setExercicioAluno}
          adicionarExercicio={adicionarExercicio}
          atualizarLista={atualizarListaTreinos}
          treino={treino}
        />
      </ContentTabs>
    </RootTabs>
  );
}
