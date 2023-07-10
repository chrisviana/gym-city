// AlunoSearch.js
import React, { useContext, useState, useEffect } from "react";
import { TreinoContext } from "../../../contexts/TreinoContext";
import { Consulta, Resultado } from "./style";

export function AlunoSearch({ setData, setUsuario, setNomeAluno }) {
  const { getAlunoTreino } = useContext(TreinoContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [alunos, setAlunos] = useState({});

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
    setUsuario(suggestion.usuario);
    setNomeAluno(suggestion.nome)
    setSearchResults([]);
  };

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

  const handleDataChange = (event) => {
    const data = event.target.value;
    setData(data)
  };

  return (
    <>
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
