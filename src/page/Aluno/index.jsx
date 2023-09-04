import { ListInfos } from "../../components/Aluno/ListAluno";
import { ModalAluno } from "../../components/Aluno/ModalCadastro";
import { useState, useContext, useEffect, useMemo } from "react";
import { AlunoContext } from "../../contexts/AlunoContext";

export function Aluno() {
  const { getAluno, deleteAluno, saveAluno, editarAluno } =
    useContext(AlunoContext);
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    getAluno().then((alunosList) => {
      setAlunos(alunosList);
    });
  }, []);

  const handleCadastroAluno = async (aluno) => {
    await saveAluno(aluno);
    const alunosList = await getAluno();
    setAlunos(alunosList);
  };

  const handleDeleteAluno = async (id, usuario) => {
    await deleteAluno(id, usuario);
    const alunosList = await getAluno();
    setAlunos(alunosList);
  };

  const handleEditarAluno = async (id, aluno) => {
    await editarAluno(id, aluno);
    const alunosList = await getAluno();
    setAlunos(alunosList);
  };

  // Utilize useMemo para memoizar a lista de alunos
  const memoizedAlunos = useMemo(() => alunos, [alunos]);

  return (
    <ListInfos
      Modal={ModalAluno}
      dados={memoizedAlunos}
      handleDelete={handleDeleteAluno}
      handleCadastroAluno={handleCadastroAluno}
      handleEditarAluno={handleEditarAluno}
    />
  );
}
