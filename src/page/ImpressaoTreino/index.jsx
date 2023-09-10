import {
  Container,
  Content,
  Select,
  Head,
  InfoAluno,
  List,
  NumeroTitulo,
} from "./style";
import { useContext } from "react";
import { useState } from "react";
import { TreinoContext } from "../../contexts/TreinoContext";
import { useEffect } from "react";
import { PrintButton } from "../../components/Print/PrintButton";

export function ImpressaoTreino() {
  const { getTreino, getExercicioTreinoById } = useContext(TreinoContext);

  const [treinos, setTreinos] = useState([]);
  const [selectedTreino, setSelectedTreino] = useState(""); // State for selected treino
  const [searchValue, setSearchValue] = useState("");
  const [exerciciosCadastrados, setExerciciosCadastrados] = useState();

  useEffect(() => {
    getTreino().then((exercicioList) => {
      setTreinos(exercicioList);
      localStorage.removeItem("exericioCadastrado");
    });
  }, [getTreino]);

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filnpteredDados = treinos.filter(
    (treino) =>
      treino.aluno.toLowerCase().includes(searchValue.toLowerCase()) ||
      treino.usuario.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleChangeTreino = async (event) => {
    setSelectedTreino(event.target.value);
    const idTreino = event.target.name;
    const treinoEncontrado = treinos.find((treino) => treino.id === idTreino);

    if (treinoEncontrado) {
      const execiciosEncontrados = await Promise.all(
        treinoEncontrado.exercicios.map(async (exercicioId) => {
          const response = await getExercicioTreinoById(exercicioId);
          return response;
        })
      );

      setExerciciosCadastrados(execiciosEncontrados);
    } else {
      console.log("Nenhum treino encontrado com o id:", idTreino);
    }
  };

  console.log(exerciciosCadastrados)

  return (
    <Container>
      <Content>
        <Head>
          <h1>Realize a impressão do seu treino</h1>
          <input
            type="text"
            placeholder="Busque pelo seu nome ou título"
            onChange={handleSearchInputChange}
            value={searchValue}
          />
        </Head>
        <List>
          <ul>
            {filnpteredDados &&
              filnpteredDados.map((treino) => (
                <li key={treino.id}>
                  <InfoAluno>
                    <NumeroTitulo>{`Nº título: ${treino.usuario}`}</NumeroTitulo>
                    {treino.aluno}
                  </InfoAluno>

                  <div>
                    <Select
                      value={selectedTreino[treino.id]}
                      onChange={handleChangeTreino}
                      name={treino.id}
                    >
                      <option value="" selected>
                        Selecione um treino
                      </option>
                      <option value="Treino A">Treino A</option>
                      <option value="Treino B">Treino B</option>
                      <option value="Treino C">Treino C</option>
                      <option value="Treino D">Treino D</option>
                      <option value="Treino E">Treino E</option>
                    </Select>
                    <PrintButton
                      aluno={treino.aluno}
                      instrutor={treino.instrutor}
                      observacoes={treino.observacoes}
                      isAluno={true}
                      selectedTreino={selectedTreino}
                      searchValue={searchValue}
                      exerciciosCadastrados={exerciciosCadastrados}
                    />
                  </div>
                </li>
              ))}
          </ul>
        </List>
      </Content>
    </Container>
  );
}
