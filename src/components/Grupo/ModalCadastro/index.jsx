import * as Dialog from "@radix-ui/react-dialog";
import { Button, Close, Content, Overlay, Title } from "./styles";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function ModalCadastroGrupo({
  isEditing = true,
  handleCadastroGrupo,
  infoEdit,
  handleEditarAluno,
}) {
  const [descricao, setDescricao] = useState({});

  useEffect(() => {
    setDescricao(infoEdit);
  }, [infoEdit]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDescricao((prevGrupo) => ({
      ...prevGrupo,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      descricao === undefined ||
      !descricao ||
      Object.keys(descricao).length === 0
    ) {
      toast.warning("Preencha os campos obrigatórios");
      return;
    }

    if (!isEditing) {
      handleCadastroGrupo(descricao);
      setDescricao("");
    } else {
      handleEditarAluno(descricao.id, descricao);
    }
  };

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close id="closeModal"> X </Close>
        <form onSubmit={handleSubmit}>
          <Title>{isEditing ? "Editar grupo" : "Cadastro de grupo"}</Title>
          <div>
            <label>Descrição*</label>
            <input
              type="text"
              name="descricao"
              placeholder="Descrição"
              autoComplete="off"
              onChange={handleChange}
              value={descricao?.descricao || ""}
            />
          </div>
          <Button type="submit">{isEditing ? "Salvar" : "Cadastrar"}</Button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
