import { useContext, useEffect, useState } from "react";
import { LogContext } from "../../contexts/LogContext";
import { Container, Content } from "./style";

export function RelatorioLog() {
  const { getLogs } = useContext(LogContext);

  const [logs, setLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMore, setShowMore] = useState(false); // Estado para controlar o botão "Ver mais"
  const initialLimit = 10; // Número de registros a serem exibidos inicialmente
  const loadMoreStep = 10; // Quantidade a ser carregada a cada clique no botão "Ver mais"

  useEffect(() => {
    getLogs().then((response) => {
      setLogs(response);
    });
  }, []);

  // Função para filtrar os logs com base no alunoUsuario
  const filteredLogs = logs.filter((log) =>
    log.dadosAnteriores.alunoUsuario.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Exibe os logs limitados inicialmente ou todos os logs filtrados, dependendo do estado showMore
  const logsToShow = showMore ? filteredLogs : filteredLogs.slice(0, initialLimit);

  return (
    <Container>
      <h1>Relatório de Log</h1>
        <input
          type="text"
          placeholder="Digite o nome do aluno para buscar"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowMore(false); // Reseta o estado showMore ao fazer uma nova pesquisa
          }}
        />
      <Content>
        
        <table>
          {/* Cabeçalho da tabela */}
          <thead>
            <tr>
              <th>Data e Hora</th>
              <th style={{ textAlign: "left" }}>Dados Anteriores</th>
              <th style={{ textAlign: "left" }}>Dados Atualizados</th>
            </tr>
          </thead>
          {/* Corpo da tabela */}
          <tbody>
            {logsToShow.map((log) => (
              <tr key={log.timestamp}>
                <td>{log.timestamp.toDate().toLocaleString()}</td>
                    <td style={{ textAlign: "left" }}>
                      <p>Aluno: {log.dadosAnteriores.alunoUsuario}</p>
                      <p>Exercicío: {log.dadosAnteriores.exercicio}</p>
                      <p>Repetição: {log.dadosAnteriores.reptemp}</p>
                      <p>Series: {log.dadosAnteriores.series}</p>
                      <p>Descanso: {log.dadosAnteriores.descanso}</p>
                    </td>
                    <td style={{ textAlign: "left" }}>
                      <p>Aluno: {log.dadosAtualizados.alunoUsuario}</p>
                      <p>Exercicío: {log.dadosAtualizados.exercicio}</p>
                      <p>Repetição: {log.dadosAtualizados.reptemp}</p>
                      <p>Series: {log.dadosAtualizados.series}</p>
                      <p>Descanso: {log.dadosAtualizados.descanso}</p>
                    </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Botão "Ver mais" que aparece apenas quando há registros filtrados não exibidos */}
        {!showMore && filteredLogs.length > initialLimit && (
          <button onClick={() => setShowMore(true)}>Ver mais</button>
        )}
      </Content>
    </Container>
  );
}
