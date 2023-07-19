import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Impressao } from "../../page/Impressao/Impressao";
import { ButtonImprimir } from "./style";

// Usando React.forwardRef para envolver o componente Impressao
const ImpressaoComRef = React.forwardRef(({ exercicios, aluno, instrutor }, ref) => (
  <div ref={ref}>
    <Impressao exercicios={exercicios} aluno={aluno} instrutor={instrutor} />
  </div>
));

export const PrintButton = ({ exercicios, aluno, instrutor, treinoCadastrado }) => {
  const componentRef = useRef();

  const handlePrint = () => {
    componentRef.current.print();
  };

  return (
    <div>
      <ReactToPrint
        trigger={() => <ButtonImprimir onClick={handlePrint} disabled={treinoCadastrado}>Imprimir</ButtonImprimir>}
        content={() => componentRef.current}
      />
      {/* Usando o componente ImpressaoComRef em vez de Impressao */}
      <div style={{ display: "none" }}>
        <ImpressaoComRef exercicios={exercicios} aluno={aluno} instrutor={instrutor} ref={componentRef} />
      </div>
    </div>
  );
};
