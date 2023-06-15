import { useContext, useEffect, useState } from "react";
import { ListExercicio } from "../../components/Exercicio/ListExercicio";
import { ExercicioContext } from "../../contexts/ExercicioContext";

export function Exercicio() {
  const {
    getExercicio,
    deleteExercicio,
    saveExercicio,
    editarExercicio,
    getGrupo,
  } = useContext(ExercicioContext);
  const [exercicios, setExercicios] = useState([]);

  useEffect(() => {
    getExercicio().then((exercicioList) => {
      setExercicios(exercicioList);
    });
  }, []);

  const handleCadastroExercicio = async (exercicio) => {
    await saveExercicio(exercicio);
    const exercicioList = await getExercicio();
    setExercicios(exercicioList);
  };

  const handleDeleteExercicio = async (id) => {
    await deleteExercicio(id);
    const exercicioList = await getExercicio();
    setExercicios(exercicioList);
  };

  const handleEditarExercicio = async (id, aluno) => {
    await editarExercicio(id, aluno);
    const exercicioList = await getExercicio();
    setExercicios(exercicioList);
  };

  return (
    <ListExercicio
      dados={exercicios}
      handleCadastroExercicio={handleCadastroExercicio}
      handleDeleteExercicio={handleDeleteExercicio}
      handleEditarExercicio={handleEditarExercicio}
      getGrupo={getGrupo}
    />
  );
}
