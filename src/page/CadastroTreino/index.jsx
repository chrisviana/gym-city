import { useContext, useEffect, useRef, useState } from "react";
import {
  ButtonCadastrar,
  ButtonVoltar,
  Cabecalho,
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
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PrintButton } from "../../components/Print/PrintButton";

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
  const [treinoA, setTreinoA] = useState([])
  const [idDeCadastro, setIdDeCadastro] = useState()
  const [editarTreinoClick, setEditarTreinoClick] = useState(false)
  const [alunoExiste, setAlunoExiste] = useState();
  
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
    if (!treinoCadastrado && !id && !idDeCadastro) {
      saveTreino(treino).then((treinoId) => {
        setIdDeCadastro(treinoId);
      })

    }

    if (idDeCadastro && !treinoCadastrado) {
      editarTreino(idDeCadastro, treino)
    }

    if (id && isEditing && editarTreinoClick) {
      editarTreino(id, treino);
    }
  }, [treinoCadastrado, treino]);

  const cadastrarTreino = () => {
    if (alunoUsuario && dataTreino && instrutor) {

      setTreino((prevTreinos) => ({
        ...prevTreinos,
        instrutor: instrutor,
        aluno: aluno !== alunoExiste ? alunoExiste : aluno,
        data: dataTreino,
        observacoes: obvervacao,
        usuario: alunoUsuario,
        exercicios,
      }));

      setIsEditing(true)
      setTreinoCadastrado(false);
      setEditarTreinoClick(true)
    } else {
      
      if (!alunoUsuario) {
        toast.warning("Informe uma aluno.");
        return false
      }

      if (!dataTreino) {
        toast.warning("Informe uma data.");
        return false
      }

      toast.warning("Preencha os campos obrigatórios");
      return false
    }
  };

  const atualizarListaTreinos = () => {
    
    if (id) {
      getExercioTreinoByUsuario(alunoUsuario)
        .then((response) => {
          setTreino(response);
          setExercicios(response);
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
        <Cabecalho>
          <Title></Title>
          <Link to="/app/treino">
            <ButtonVoltar>Voltar</ButtonVoltar>
          </Link>
         
        </Cabecalho>
     
        <Head>
          <AlunoSearch
            setAluno={setAluno}
            setAlunoUsuario={setAlunoUsuario}
            alunoDigitado={aluno}
            setDataTreino={setDataTreino}
            isEditing={isEditing}
            alunoUsuario={alunoUsuario}
            setAlunoExiste={setAlunoExiste}
          />
        </Head>

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
        </ContentButton>
        <TreinoTabs
          alunoUsuario={alunoUsuario}
          setExercicioAluno={setExercicioAluno}
          adicionarExercicio={adicionarExercicio}
          exercicios={exercicios}
          setSelectTab={setSelectTab}
          atualizarListaTreinos={atualizarListaTreinos}
          deleteExercicioTreinoId={deleteExercicioTreinoId}
          setIsEditing={setIsEditing}
          setTreinoA={setTreinoA}
          treinoA={treinoA}
          treino={treino}
          selectTab={selectTab}
        />
        <ContentButton>
          
          <PrintButton exercicios={exercicios} aluno={aluno} instrutor={instrutor} treinoCadastrado={treinoCadastrado} observacoes={obvervacao}/>
        </ContentButton>
      </Content>
    </Container>
  );
}
