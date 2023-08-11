import { Container, Content, Select, Head, InfoAluno, List, NumeroTitulo } from "./style";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TreinoContext } from "../../contexts/TreinoContext";
import { useEffect } from "react";
import ImgPrinter from '../../assets/printer.svg'
import { PrintButton } from "../../components/Print/PrintButton";

export function ImpressaoTreino() {

  const { getTreino} = useContext(TreinoContext);

  const [treinos, setTreinos] = useState([]);
  const [selectedTreino, setSelectedTreino] = useState(""); // State for selected treino



  useEffect(() => {
    getTreino().then((exercicioList) => {
      setTreinos(exercicioList);
    });
  }, []);


  const [searchValue, setSearchValue] = useState("");
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  
  const filteredDados = treinos.filter((treino) =>

    treino.aluno.toLowerCase().includes(searchValue.toLowerCase()) ||
    treino.usuario.toLowerCase().includes(searchValue.toLowerCase()) 
  );

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
            {filteredDados &&
              filteredDados.map((treino) => (
                <li key={treino.id}>
                   <InfoAluno>
                    <NumeroTitulo>{`Nº título: ${treino.usuario}`}</NumeroTitulo>
                    {treino.aluno}
                  </InfoAluno>

                  <div>             
                  <Select
                      value={selectedTreino[treino.id]}
                      onChange={(e) => setSelectedTreino(e.target.value)}
                    >
                      <option value="" selected>Selecione um treino</option>
                      <option value="Treino A">Treino A</option>
                      <option value="Treino B">Treino B</option>
                      <option value="Treino C">Treino C</option>
                      <option value="Treino D">Treino D</option>
                      <option value="Treino E">Treino E</option>
                    </Select>
                    <PrintButton 
                      exercicios={treino.exercicios} 
                      aluno={treino.aluno} 
                      instrutor={treino.instrutor} 
                      observacoes={treino.observacoes} 
                      isAluno={true}
                      selectedTreino={selectedTreino}
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
