import { useContext, useEffect, useState } from "react";
import { TreinoContext } from "../../contexts/TreinoContext";
import { ListTreino } from "../../components/ListTreino";

export function Treino() {
  const {
    getTreino,
    deleteTreino,
    saveExercicio,
    editarExercicio,
    getGrupo,
  } = useContext(TreinoContext);
  const [treinos, setTreinos] = useState([]);

  useEffect(() => {
    getTreino().then((exercicioList) => {
      setTreinos(exercicioList);
    });
  }, []);

  const handleCadastroExercicio = async (exercicio) => {
    await saveExercicio(exercicio);
    const exercicioList = await getTreino();
    setTreinos(exercicioList);
  };

  const handleDeleteTreino = async (id) => {
    await deleteTreino(id);
    const treinoList = await getTreino();
    setTreinos(treinoList);
  };

  const handleEditarExercicio = async (id, aluno) => {
    await editarExercicio(id, aluno);
    const exercicioList = await getTreino();
    setTreinos(exercicioList);
  };

  return (
    <ListTreino
      dados={treinos}
      handleCadastroExercicio={handleCadastroExercicio}
      handleDeleteTreino={handleDeleteTreino}
      handleEditarExercicio={handleEditarExercicio}
      getGrupo={getGrupo}
    />
  );
}
