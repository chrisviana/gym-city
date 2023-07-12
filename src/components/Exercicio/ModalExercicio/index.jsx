import * as Dialog from "@radix-ui/react-dialog";
import { Button, Close, Content, Overlay, Select, Title } from "./styles";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function ModalExercicio({
  isEditing = true,
  handleCadastroExercicio,
  infoEdit,
  handleEditarExercicio,
  getGrupo,
}) {
  const [descricao, setDescricao] = useState("");
  const [grupoId, setGrupoId] = useState("");
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    if (infoEdit) {
      setDescricao(infoEdit.descricao || "");
      setGrupoId(infoEdit.grupoId || "");
    }
  }, [infoEdit]);

  useEffect(() => {
    getGrupo().then((grupoList) => {
      setGrupos(grupoList);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!descricao || !grupoId) {
      toast.warning("Preencha os campos obrigatórios");
      return;
    }

    const exercicio = {
      descricao: descricao,
      grupoId: grupoId,
    };

    if (!isEditing) {
      handleCadastroExercicio(exercicio);
      setDescricao("");
      setGrupoId("");
    } else {
      handleEditarExercicio(infoEdit.id, exercicio);
    }
  };

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close id="closeModal"> X </Close>
        <form onSubmit={handleSubmit}>
          <Title>{isEditing ? "Editar exercício" : "Cadastro de exercício"}</Title>
          <div>
            <label>Grupo*</label>
            <Select
              value={grupoId}
              onChange={(event) => setGrupoId(event.target.value)}
            >
              <option value="" disabled>
                Selecione
              </option>
              {grupos.map((grupo) => (
                <option key={grupo.id} value={grupo.id}>
                  {grupo.descricao}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <label>Descrição*</label>
            <input
              type="text"
              name="descricao"
              placeholder="Descrição"
              autoComplete="off"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
            />
          </div>
          <Button type="submit">{isEditing ? "Salvar" : "Cadastrar"}</Button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
