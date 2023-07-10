import { useContext, useEffect, useState } from "react";
import { TreinoContext } from "../../contexts/TreinoContext";
import { ListTreino } from "../../components/ListTreino";

export function Treino() {
  const {
    getTreino,
    deleteExercicio,
    saveExercicio,
    editarExercicio,
    getGrupo,
  } = useContext(TreinoContext);
  const [exercicios, setExercicios] = useState([]);

  useEffect(() => {
    getTreino().then((exercicioList) => {
      setExercicios(exercicioList);
    });
  }, []);

  console.log(exercicios)

  const handleCadastroExercicio = async (exercicio) => {
    await saveExercicio(exercicio);
    const exercicioList = await getTreino();
    setExercicios(exercicioList);
  };

  const handleDeleteExercicio = async (id) => {
    await deleteExercicio(id);
    const exercicioList = await getTreino();
    setExercicios(exercicioList);
  };

  const handleEditarExercicio = async (id, aluno) => {
    await editarExercicio(id, aluno);
    const exercicioList = await getTreino();
    setExercicios(exercicioList);
  };

  return (
    <ListTreino
      dados={exercicios}
      handleCadastroExercicio={handleCadastroExercicio}
      handleDeleteExercicio={handleDeleteExercicio}
      handleEditarExercicio={handleEditarExercicio}
      getGrupo={getGrupo}
    />
  );
}
