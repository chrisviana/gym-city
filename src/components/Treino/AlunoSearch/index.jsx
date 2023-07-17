// AlunoSearch.js
import React, { useContext, useState, useEffect } from "react";
import { TreinoContext } from "../../../contexts/TreinoContext";
import { Consulta, Resultado } from "./style";

export function AlunoSearch({ setAluno, alunoDigitado, setAlunoUsuario, setDataTreino, isEditing, alunoUsuario }) {
  console.log("alunoDigitado: ", alunoDigitado)

  const { getAlunoTreino } = useContext(TreinoContext);
  const [searchResults, setSearchResults] = useState([]);
  const [alunos, setAlunos] = useState({});

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
    const nomeAlunoDigitado = event.target.value;
    setAluno(nomeAlunoDigitado);
    const filteredAlunos = Object.values(alunos).filter(
      (aluno) =>
        aluno.nome.toLowerCase().includes(nomeAlunoDigitado.toLowerCase()) ||
        aluno.usuario.toLowerCase().includes(nomeAlunoDigitado.toLowerCase())
    );
    setSearchResults(filteredAlunos.length > 0 ? filteredAlunos : []);
  };

  const handleSelectSuggestion = (suggestion) => {
    setAluno(suggestion.nome);
    setAlunoUsuario(suggestion.usuario);
    setSearchResults([]);
  };

  useEffect(() => {
    if (alunoDigitado === "") {
      setSearchResults([])
    }
  },[alunoDigitado])


  useEffect(() => {
    if (isEditing) {
      setAluno(alunoDigitado)
      setAlunoUsuario(alunoUsuario)
    }
  },[isEditing])

  return (
    <>
      <Consulta>
        <input
          type="text"
          placeholder="Busque por um aluno ou título"
          name="nome"
          onChange={handleSearch}
          value={alunoDigitado}
          autoComplete="off"
        />
        <input
          type="date"
          style={{ width: 210 }}
          name="data"
          autoComplete="off"
          onChange={(event) => setDataTreino(event.target.value)}

        />
      </Consulta>
      <Resultado  vazio={searchResults.length === 0}>
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((result, index) => (
              <li key={index} onClick={() => handleSelectSuggestion(result)}>
                {result.nome} - {result.usuario}
              </li>
            ))}
          </ul>
        )}
      </Resultado>
    </>
  );
}
