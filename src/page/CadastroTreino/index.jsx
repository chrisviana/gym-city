import { useContext, useEffect, useState } from "react";
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
import { TreinoContext } from "../../contexts/TreinoContext";
import { useParams } from "react-router-dom";

export function CadastroTreino() {
  const { saveTreino, getTreinoById } = useContext(TreinoContext)

  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState("");
  const [instrutor, setInstrutor] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [treinoCadastrado, setTreinoCadastrado] = useState(true);
  const [usuario, setUsuario] = useState("");

  const [treino, setTreino] = useState({});
  const [treinos, setTreinos] = useState({
    aluno: "",
    data: "",
    treinoA: { exercicios: [] },
    treinoB: { exercicios: [] },
    treinoC: { exercicios: [] },
    treinoD: { exercicios: [] },
    treinoE: { exercicios: [] },
    instrutor: "",
    observacoes: "",
    usuario: "",
  });

  const { id } = useParams();
  
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const response = await getTreinoById(id);
        console.log("response", response);
        setTreinos(response)
      };
  
      fetchData();
    }
  }, [id]);

  const adicionarTreino = (event, treinoKey) => {
  
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
    setTreino({})
  };

  console.log("Treino: " + treino)

  useEffect(() => {
    if (!treinoCadastrado) {
      saveTreino(treinos);
    }
  }, [treinos, saveTreino, treinoCadastrado]);

  const cadastrarTreino = () => {
  
    setTreinos((prevTreinos) => ({
      ...prevTreinos,
      instrutor: instrutor,
      aluno: searchTerm,
      data: data,
      observacoes: observacoes,
      usuario: usuario,
    }));
  
    setTreinoCadastrado(false);
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
            setUsuario={setUsuario}
            treinos={treinos}
          />
        </Head>
        <TreinoTabs
          adicionarTreino={adicionarTreino}
          treinos={treinos}
          setTreino={setTreino}
          treino={treino}
        />
        <ContentForm>
          <label>Instrutor*</label>
          <Input
            placeholder="Instrutor"
            type="text"
            onChange={(e) => setInstrutor(e.target.value)}
            value={"" || treinos.instrutor}
          />
        </ContentForm>
        <ContentForm>
          <label>Observações*</label>
          <TextArea
            placeholder="Observações"
            type="text"
            onChange={(e) => setObservacoes(e.target.value)}
            value={"" || treinos.observacoes}
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
