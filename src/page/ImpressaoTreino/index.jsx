import { Container, Content, ContentButton, Head, InfoAluno, List, NumeroTitulo } from "./style";
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

  useEffect(() => {
    getTreino().then((exercicioList) => {
      setTreinos(exercicioList);
    });
  }, []);


  const [searchValue, setSearchValue] = useState("");
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  

  console.log(treinos)
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
                    <PrintButton exercicios={treino.exercicios} aluno={treino.aluno} instrutor={treino.instrutor} observacoes={treino.observacoes} isAluno={true}/>
                  </div>
                </li>
              ))}
          </ul>
        </List>
      </Content>
    </Container>
  );
}
