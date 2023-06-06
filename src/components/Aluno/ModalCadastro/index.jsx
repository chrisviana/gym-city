import * as Dialog from "@radix-ui/react-dialog";
import { Button, Close, Content, Overlay, Title } from "./styles";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function ModalAluno({
  handleCadastroAluno,
  infoEdit,
  isEditing,
  handleEditarAluno,
}) {
  const [infoAluno, setInfoAluno] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfoAluno((prevInfoAluno) => ({
      ...prevInfoAluno,
      [name]: value,
    }));
  };

  useEffect(() => {
    setInfoAluno(infoEdit);
  }, [infoEdit]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEditing) {
      if (
        (infoAluno.nome &&
          infoAluno.idade &&
          infoAluno.peso &&
          infoAluno.altura &&
          infoAluno.usuario) === undefined
      ) {
        toast.warning("Preencha todos os campos");
        return;
      }

      handleCadastroAluno(infoAluno);
      setInfoAluno({});
    } else {
      handleEditarAluno(infoAluno.id, infoAluno);
    }
  };

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close id="closeModal"> X </Close>
        <form onSubmit={handleSubmit}>
          <Title>{isEditing ? "Editar aluno" : "Cadastro de aluno"}</Title>
          <div>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              onChange={handleChange}
              value={infoAluno?.nome || ""}
            />
            <input
              type="text"
              name="idade"
              placeholder="Idade"
              onChange={handleChange}
              value={infoAluno?.idade || ""}
            />
            <input
              type="text"
              name="peso"
              placeholder="Peso"
              onChange={handleChange}
              value={infoAluno?.peso || ""}
            />
            <input
              type="text"
              name="altura"
              placeholder="Altura"
              onChange={handleChange}
              value={infoAluno?.altura || ""}
            />
            <input
              type="text"
              name="usuario"
              placeholder="Usuário"
              onChange={handleChange}
              value={infoAluno?.usuario || ""}
            />
          </div>
          <Title>Bioimpedância</Title>
          <div>
            <input
              type="date"
              style={{ width: 135 }}
              name="data"
              onChange={handleChange}
              value={infoAluno?.data || ""}
            />
            <input
              type="text"
              name="instrutor"
              placeholder="Instrutor"
              style={{ width: 262 }}
              onChange={handleChange}
              value={infoAluno?.instrutor || ""}
            />
            <input
              type="text"
              name="imc"
              placeholder="IMC"
              onChange={handleChange}
              value={infoAluno?.imc || ""}
            />
            <input
              type="text"
              name="gordura"
              placeholder="% Gordura"
              style={{ width: 189 }}
              onChange={handleChange}
              value={infoAluno?.gordura || ""}
            />
            <input
              type="text"
              name="idadeMuscular"
              placeholder="Idade muscular"
              style={{ width: 154 }}
              onChange={handleChange}
              value={infoAluno?.idadeMuscular || ""}
            />
            <input
              type="text"
              name="gorduraVisceral"
              placeholder="Gordura visceral"
              style={{ width: 154 }}
              onChange={handleChange}
              value={infoAluno?.gorduraVisceral || ""}
            />
            <input
              type="text"
              name="percentMusculo"
              placeholder="% De musculo"
              style={{ width: 154 }}
              onChange={handleChange}
              value={infoAluno?.percentMusculo || ""}
            />
          </div>
          <Button type="submit">{isEditing ? "Salvar" : "Cadastrar"}</Button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
