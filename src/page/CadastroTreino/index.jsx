import { useState } from "react";
import {
  ButtonCadastrar,
  ButtonImprimir,
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

export function CadastroTreino() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState("");

  const [treino, setTreino] = useState({});
  const [treinos, setTreinos] = useState({
    aluno: "",
    data: "",
    treinoA: { exercicios: [] },
    treinoB: { exercicios: [] },
    treinoC: { exercicios: [] },
    treinoD: { exercicios: [] },
    treinoE: { exercicios: [] },
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
      aluno: searchTerm,
      data: data,
      [treinoKey]: {
        exercicios: [...prevTreinos[treinoKey].exercicios, novoExercicio],
      },
    }));
  };

  return (
    <Container>
      <Content>
        <Title>Cadastro de treino</Title>
        <Head>
          <AlunoSearch
            setTreino={setTreino}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            setData={setData}
          />
        </Head>
        <TreinoTabs
          adicionarTreino={adicionarTreino}
          treinos={treinos}
          setTreino={setTreino}
        />
        <ContentForm>
          <label>Instrutor*</label>
          <Input placeholder="Instrutor" />
        </ContentForm>
        <ContentForm>
          <label>Observações*</label>
          <TextArea placeholder="Observações" />
        </ContentForm>
        <ContentButton>
          <ButtonCadastrar>Cadastrar</ButtonCadastrar>
          <ButtonImprimir>Imprimir</ButtonImprimir>
        </ContentButton>
      </Content>
    </Container>
  );
}
