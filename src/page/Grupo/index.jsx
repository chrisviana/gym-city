import { useContext, useEffect, useState } from "react";
import { ListGrupo } from "../../components/Grupo/ListGrupo";
import { GrupoContext } from "../../contexts/GrupoContext";

export function Grupo() {
  const { getGrupo, deleteGrupo, saveGrupo, editarGrupo } =
    useContext(GrupoContext);
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    getGrupo().then((gruposList) => {
      setGrupos(gruposList);
    });
  }, []);

  const handleCadastroGrupo = async (grupo) => {
    await saveGrupo(grupo);
    const alunosList = await getGrupo();
    setGrupos(alunosList);
  };

  const handleDeleteGrupo = async (id) => {
    await deleteGrupo(id);
    const grupoList = await getGrupo();
    setGrupos(grupoList);
  };

  const handleEditarGrupo = async (id, grupo) => {
    await editarGrupo(id, grupo);
    const gruposList = await getGrupo();
    setGrupos(gruposList);
  };

  return (
    <ListGrupo
      dados={grupos}
      handleCadastroGrupo={handleCadastroGrupo}
      handleDeleteGrupo={handleDeleteGrupo}
      handleEditarGrupo={handleEditarGrupo}
    />
  );
}
