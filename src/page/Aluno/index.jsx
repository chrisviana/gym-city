import { ListInfos } from "../../components/ListInfos";
import { CadastroAluno } from "../../components/CadastroAluno";
import { useState, useContext } from "react";
import { AlunoContext } from "../../contexts/AlunoContext";
import { useEffect } from "react";

export function Aluno() {
  const { getAluno, deleteAluno, saveAluno } = useContext(AlunoContext);
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

  const handleDeleteAluno = async (id) => {
    await deleteAluno(id);
    const alunosList = await getAluno();
    setAlunos(alunosList);
  };

  return (
    <ListInfos
      nameButton="Aluno"
      Modal={() => <CadastroAluno handleCadastroAluno={handleCadastroAluno} />}
      dados={alunos}
      handleDeleteAluno={handleDeleteAluno}
    />
  );
}
