import { ListInfos } from "../../components/ListInfos";

export function Aluno() {
  const abrirModal = () => {
    alert("Abri Modal");
  };
  return <ListInfos nameButton="Aluno" abrirModal={abrirModal} />;
}
