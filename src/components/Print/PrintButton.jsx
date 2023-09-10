import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Impressao } from "../../page/Impressao/Impressao";
import { ButtonImprimir } from "./style";
import IMGPrinter from "../../assets/printer.svg";

// Usando React.forwardRef para envolver o componente Impressao
const ImpressaoComRef = React.forwardRef(
  ({ exercicios, aluno, instrutor, observacoes, selectedTreino, exerciciosCadastrados }, ref) => (
    <div ref={ref}>
      <Impressao
        aluno={aluno}
        instrutor={instrutor}
        observacoes={observacoes}
        selectedTreino={selectedTreino}
        exerciciosCadastrados={exerciciosCadastrados}
      />
    </div>
  )
);

export const PrintButton = ({
  exercicios,
  aluno,
  instrutor,
  treinoCadastrado,
  observacoes,
  isAluno = false,
  selectedTreino,
  exerciciosCadastrados
}) => {
  const componentRef = useRef();

  const handlePrint = () => {
    componentRef.current.print();
  };



  return (
    <div>
      <ReactToPrint
        trigger={() =>
          isAluno ? (
            <button>
              <img src={IMGPrinter} alt="Icone Imprimir" />
            </button>
          ) : (
            <ButtonImprimir onClick={handlePrint} disabled={treinoCadastrado}>
              Imprimir
            </ButtonImprimir>
          )
        }
        content={() => componentRef.current}
      />
      {/* Usando o componente ImpressaoComRef em vez de Impressao */}
      <div style={{ display: "none" }}>
        <ImpressaoComRef
          aluno={aluno}
          instrutor={instrutor}
          ref={componentRef}
          observacoes={observacoes}
          selectedTreino={selectedTreino}
          exerciciosCadastrados={exerciciosCadastrados}
        />
      </div>
    </div>
  );
};
