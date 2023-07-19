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
import { useNavigate } from "react-router-dom";

export function CadastroTreino() {
  const {
    saveExercicioTreino,
    saveTreino,
    getTreinoById,
    editarTreino,
    deleteExercicioTreino,
    getTreinoByUsuario,
    getExercioTreinoByUsuario,
  } = useContext(TreinoContext);

  const [aluno, setAluno] = useState("");
  const [alunoUsuario, setAlunoUsuario] = useState("");
  const [dataTreino, setDataTreino] = useState("");
  const [exercicioAluno, setExercicioAluno] = useState();
  const [treino, setTreino] = useState("");
  const [exercicios, setExercicios] = useState([]);
  const [selectTab, setSelectTab] = useState("treinoA");
  const [instrutor, setInstrutor] = useState("");
  const [obvervacao, setObervacao] = useState([]);
  const [treinoCadastrado, setTreinoCadastrado] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  function adicionarExercicio(event) {
    event.preventDefault();
    
    if (
      exercicioAluno?.grupo &&
      exercicioAluno?.exercicio &&
      exercicioAluno?.series &&
      exercicioAluno?.reptemp &&
      exercicioAluno?.descanso
    ) {
      const treinoComUsuario = {
        ...exercicioAluno,
        alunoUsuario,
        selectTab,
      };

      saveExercicioTreino(treinoComUsuario)
        .then((response) => {
          setExercicios((prevExercicios) => [...prevExercicios, response]);
          document.getElementById("closeModal").click();
        })
        .catch((error) => {
          console.error("Erro ao adicionar exercício:", error);
        });
    } else {
      toast.warning("Preencha todos os campos obrigatórios.")
      return false
    }
  }

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const response = await getTreinoById(id);
        setIsEditing(true);
        setTreino(response);
        setExercicios(response.exercicios);
        setAluno(response.aluno);
        setAlunoUsuario(response.usuario);
        setObervacao(response.observacoes)
      };

      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (!treinoCadastrado && !id) {
      saveTreino(treino);
    }

    if (id && isEditing) {
      editarTreino(id, treino);
    }
  }, [treinoCadastrado]);

  const cadastrarTreino = () => {
    
    if (alunoUsuario && dataTreino && exercicios.length > 0 && instrutor) {
      setTreino((prevTreinos) => ({
        ...prevTreinos,
        instrutor: instrutor,
        aluno: aluno,
        data: dataTreino,
        observacoes: obvervacao,
        usuario: alunoUsuario,
        exercicios,
      }));

      setTreinoCadastrado(false);
    } else {
      toast.warning("Preencha os campos obrigatórios");
    }
  };

  const atualizarListaTreinos = () => {
    
    if (id) {
      getTreinoById(id)
        .then((response) => {
          setTreino(response);
          setExercicios(response.exercicios);
        })
        .catch((error) => {
          console.error("Erro ao obter treino:", error);
        });
    } else {
      if (isEditing) {
        getExercioTreinoByUsuario(alunoUsuario).then((response) => {
            setExercicios(response)
        });
      }
    
    }
  };

  const deleteExercicioTreinoId = async (idExericio) => {
    await deleteExercicioTreino(idExericio);
    atualizarListaTreinos();
  };

  useEffect(() => {
    if (!id && alunoUsuario) {
      const checkTreinoExistence = async () => {
        try {
          const response = await getTreinoByUsuario(alunoUsuario);
          if (response && response.length > 0) {
            toast.warning("Já existe um treino para este aluno.");
            navigate("/app/treino/");
          }
        } catch (error) {
          console.error(error);
        }
      };

      checkTreinoExistence();
    }
  }, [alunoUsuario]);

  return (
    <Container>
      <Content>
        <Title>Cadastro de treino</Title>
        <Head>
          <AlunoSearch
            setAluno={setAluno}
            setAlunoUsuario={setAlunoUsuario}
            alunoDigitado={aluno}
            setDataTreino={setDataTreino}
            isEditing={isEditing}
            alunoUsuario={alunoUsuario}
          />
        </Head>
        <TreinoTabs
          alunoUsuario={alunoUsuario}
          setExercicioAluno={setExercicioAluno}
          adicionarExercicio={adicionarExercicio}
          exercicios={exercicios}
          setSelectTab={setSelectTab}
          atualizarListaTreinos={atualizarListaTreinos}
          deleteExercicioTreinoId={deleteExercicioTreinoId}
          setIsEditing={setIsEditing}
        />
        <ContentForm>
          <label>Instrutor*</label>
          <Input
            placeholder="Instrutor"
            type="text"
            onChange={(e) => setInstrutor(e.target.value)}
          />
        </ContentForm>
        <ContentForm>
          <label>Observações</label>
          <TextArea
            placeholder="Observações"
            type="text"
            onChange={(e) => setObervacao(e.target.value)}
            value={obvervacao}
          />
        </ContentForm>
        <ContentButton>
          <ButtonCadastrar onClick={cadastrarTreino}>
            {isEditing ? "Salvar" : "Cadastrar"}
          </ButtonCadastrar>
          <ButtonImprimir disabled={treinoCadastrado}>Imprimir</ButtonImprimir>
        </ContentButton>
      </Content>
    </Container>
  );
}
