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
import { toast } from "react-toastify";

export function CadastroTreino() {
  const { saveTreino, getTreinoById, editarTreino } = useContext(TreinoContext)

  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState("");
 

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
  const [instrutor, setInstrutor] = useState(treinos.instrutor || "");
  const [observacoes, setObservacoes] = useState(treinos.observacoes || "");
  const [isEditing, setIsEditing] = useState(false)

  const { id } = useParams();
  
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const response = await getTreinoById(id);
        setIsEditing(true)
        setTreinos(response)
      };
  
      fetchData();
    }
  }, [id]);

  const adicionarTreino = (event, treinoKey) => {

    event.preventDefault();

    if (
      treino.grupo &&
      treino.exercicio &&
      treino.series &&
      treino.reptemp &&
      treino.descanso
    ) {
      const novoExercicio = {
        grupo: treino.grupo,
        exercicio: treino.exercicio,
        series: treino.series,
        reptemp: treino.reptemp,
        carga: treino.carga || "",
        descanso: treino.descanso,
      };
  
      setTreinos((prevTreinos) => ({
        ...prevTreinos,
        [treinoKey]: {
          exercicios: [...prevTreinos[treinoKey].exercicios, novoExercicio],
        },
      }));
  
      document.getElementById("closeModal").click();
      setTreino({});
    } else {
      toast.warning('Preencha os campos obrigatórios.');
    }
  };

  useEffect(() => {
    if (!treinoCadastrado && !id)  {
      saveTreino(treinos);
    } 
    if (id && isEditing) {
      editarTreino(id, treinos)
    }

  }, [treinoCadastrado]);

  const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  const cadastrarTreino = () => {
    
    if (searchTerm && data && !isObjectEmpty(treino) && instrutor) {
      setTreinos((prevTreinos) => ({
        ...prevTreinos,
        instrutor: instrutor,
        aluno: searchTerm,
        data: data,
        observacoes: observacoes,
        usuario: usuario,
      }));
      setTreinoCadastrado(false);
    } else {
      toast.warning("Preencha os campos obrigatórios")
    }
   
  
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
            data={data}
            isEditing={isEditing}
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
            value={instrutor}
          />
        </ContentForm>
        <ContentForm>
          <label>Observações</label>
          <TextArea
            placeholder="Observações"
            type="text"
            onChange={(e) => setObservacoes(e.target.value)}
            value={observacoes || treinos.observacoes}
          />
        </ContentForm>
        <ContentButton>
          <ButtonCadastrar onClick={cadastrarTreino}>{isEditing ? "Salvar" : "Cadastrar"} </ButtonCadastrar>
          <ButtonImprimir disabled={treinoCadastrado}>Imprimir</ButtonImprimir>
        </ContentButton>
      </Content>
    </Container>
  );
}
