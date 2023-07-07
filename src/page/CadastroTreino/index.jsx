import { useContext, useEffect, useState } from "react";
import {
  ButtonCadastrar,
  ButtonExercicio,
  ButtonImprimir,
  ButtonTabs,
  Cabecalho,
  Consulta,
  Container,
  Content,
  ContentButton,
  ContentForm,
  ContentTabs,
  Head,
  Input,
  ListExercicio,
  ListTabs,
  Resultado,
  RootTabs,
  TextArea,
  Title,
} from "./style";
import { TreinoContext } from "../../contexts/TreinoContext";
import { ButtonCadastroTreino } from "../../components/Treino/ButtonCadastro";

export function CadastroTreino() {
  const { getAlunoTreino } = useContext(TreinoContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [alunos, setAlunos] = useState({});
  const [treino, setTreino] = useState()
  const [treinoA, setTreinoA] = useState({
    nome: '',
    data: '',
    treinos: [],
  });

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const resultados = await getAlunoTreino();
        setAlunos(resultados);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlunos();
  }, []);

  const handleSearch = async (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    if (searchTerm === "") {
      setSearchResults([]); 
    } else {
      const filteredAlunos = alunos.filter(
        (aluno) =>
          aluno.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          aluno.usuario.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredAlunos);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchTerm(suggestion.nome);
    setSearchResults([]);
  };

  const adicionarTreino = (event) => {
    event.preventDefault();
    const novoTreino = {
      grupo: treino.grupo,
      exercicio: treino.exercicio,
      series: treino.series,
      reptemp: treino.reptemp,
      carga: treino.carga,
      descanso: treino.descanso
    };

    setTreinoA((prevTreinoA) => ({
      ...prevTreinoA,
      nome: searchTerm,
      data: treino.data,
      treinos: [...prevTreinoA.treinos, novoTreino],
    }));
  };

  const handleDataChange = (event) => {
    const data = event.target.value;
    setTreino((prevTreino) => ({
      ...prevTreino,
      data: data,
    }));
  };

  console.log(treinoA)

  return (
    <Container>
      <Content>
        <Title>Cadastro de treino</Title>
        <Head>
          <Consulta>
            <input
              type="text"
              placeholder="Busque por um aluno ou título"
              onChange={handleSearch}
              value={searchTerm}
              name="nome"
            />
            <input
              type="date"
              style={{ width: 210 }}
              name="data"
              autoComplete="off"
              onChange={handleDataChange}
            />
          </Consulta>
          <Resultado vazio={searchResults.length === 0}>
            {searchResults.length > 0 && (
              <ul>
                {searchResults.map((result, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectSuggestion(result)}
                  >
                    {result.nome} - {result.usuario}
                  </li>
                ))}
              </ul>
            )}
          </Resultado>
        </Head>

        <RootTabs className="TabsRoot" defaultValue="tab1">
          <ListTabs className="TabsList" aria-label="Manage your account">
            <ButtonTabs className="TabsTrigger" value="tab1">
              Treino A
            </ButtonTabs>
            <ButtonTabs className="TabsTrigger" value="tab2">
              Treino B
            </ButtonTabs>
            <ButtonTabs className="TabsTrigger" value="tab3">
              Treino C
            </ButtonTabs>
            <ButtonTabs className="TabsTrigger" value="tab4">
              Treino D
            </ButtonTabs>
            <ButtonTabs className="TabsTrigger" value="tab5">
              Treino E
            </ButtonTabs>
          </ListTabs>
          <ContentTabs value="tab1">
            <Cabecalho>
              <ul>
                <li>Execício</li>
                <li>Séries</li>
                <li>Repetição</li>
                <li>Carga</li>
                <li>Descanso</li>
              </ul>
            </Cabecalho>
            <ListExercicio>
              <ul>
                <li>Supino reto com barra</li>
                <li>3</li>
                <li>12</li>
                <li>10kg</li>
                <li>45s</li>
              </ul>
            </ListExercicio>
            <ButtonCadastroTreino setTreino={setTreino} adicionarTreino={adicionarTreino}/>
          </ContentTabs>
          <ContentTabs value="tab2">2</ContentTabs>
          <ContentTabs value="tab3">3</ContentTabs>
          <ContentTabs value="tab4">4</ContentTabs>
          <ContentTabs value="tab5">5</ContentTabs>
        </RootTabs>
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
