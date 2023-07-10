import { useState, useContext } from "react";
import {
  ButtonCadastrar,
  ButtonImprimir,
  ButtonLimparDados,
  Container,
  Content,
  ContentButton,
  ContentForm,
  Head,
  Input,
  TextArea,
  Title,
} from "./style";
import { AlunoSearch } from "../../components/Treino/AlunoSearch";
import { TreinoTabs } from "../../components/Treino/TreinoTabs";
import { TreinoContext } from "../../contexts/TreinoContext";

export function CadastroTreino() {
  const { saveTreino } = useContext(TreinoContext)
  const [usuario, setUsuario] = useState("");
  const [nomeAluno, setNomeAluno] = useState("")
  const [data, setData] = useState("");
  const [instrutor, setInstrutor] = useState("");
  const [obervacoes, setobervacoes] = useState("");
  const [treino, setTreino] = useState({});
  const [treinoCadastrado, setTreinoCadastrado] = useState(true)
  const [treinos, setTreinos] = useState({
    usuario: "",
    data: "",
    treinoA: { exercicios: [] },
    treinoB: { exercicios: [] },
    treinoC: { exercicios: [] },
    treinoD: { exercicios: [] },
    treinoE: { exercicios: [] },
    instrutor: "",
    obervacoes: "",
    nomeAluno: ""
  });

  const adicionarTreino = (event, treinoKey) => {
    event.preventDefault();

    const novoExercicio = {
      grupo: treino.grupo,
      exercicio: treino.exercicio,
      series: treino.series,
      reptemp: treino.reptemp,
      carga: treino.carga,
      descanso: treino.descanso,
    };

    setTreinos((prevTreinos) => ({
      ...prevTreinos,  
      [treinoKey]: {
        exercicios: [...prevTreinos[treinoKey].exercicios, novoExercicio],
      },
    }));

    document.getElementById("closeModal").click();
  };

  

  const cadastrarTreino =  () => {
    setTreinos((prevTreinos) => ({
      ...prevTreinos,
      data: data,
      usuario: usuario,
      instrutor: instrutor,
      obervacoes: obervacoes,
      nomeAluno: nomeAluno
    }));

    saveTreino(treinos);
    setTreinoCadastrado(false)
  };

  return (
    <Container>
      <Content>
        <Title>Cadastro de treino</Title>
        <ButtonLimparDados>Limpar dados</ButtonLimparDados>
        <Head>
          <AlunoSearch
            setTreino={setTreino}
            setData={setData}
            setUsuario={setUsuario}
            setNomeAluno={setNomeAluno}
          />
        </Head>
        <TreinoTabs
          adicionarTreino={adicionarTreino}
          treinos={treinos}
          setTreino={setTreino}
        />
        <ContentForm>
          <label>Instrutor*</label>
          <Input
            placeholder="Instrutor"
            onChange={(e) => setInstrutor(e.target.value)}
          />
        </ContentForm>
        <ContentForm>
          <label>Observações*</label>
          <TextArea
            placeholder="Observações"
            onChange={(e) => setobervacoes(e.target.value)}
          />
        </ContentForm>
        <ContentButton>
          <ButtonCadastrar onClick={cadastrarTreino}>Cadastrar</ButtonCadastrar>
          <ButtonImprimir disabled={treinoCadastrado}>Imprimir</ButtonImprimir>
        </ContentButton>
      </Content>
    </Container>
  );
}
