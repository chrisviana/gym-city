import ReactToPrint from "react-to-print";
import { Impressao } from "../page/Impressao/Impressao";

const PrintComponent = ({ dados }) => {
  return (
    <div style={{ display: "none" }}>
      <Impressao dados={dados} />
    </div>
  );
};

export default PrintComponent;