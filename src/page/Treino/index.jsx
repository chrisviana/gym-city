import { useContext, useEffect, useState } from "react";
import { TreinoContext } from "../../contexts/TreinoContext";
import { ListTreino } from "../../components/ListTreino";

export function Treino() {
  const {
    getTreino,
    deleteTreino,
    getGrupo,
  } = useContext(TreinoContext);
  const [treinos, setTreinos] = useState([]);

  useEffect(() => {
    getTreino().then((exercicioList) => {
      setTreinos(exercicioList);
    });
  }, []);

  const handleDeleteTreino = async (id) => {
    await deleteTreino(id);
    const treinoList = await getTreino();
    setTreinos(treinoList);
  };

  return (
    <ListTreino
      dados={treinos}
      handleDeleteTreino={handleDeleteTreino}
      getGrupo={getGrupo}
    />
  );
}
