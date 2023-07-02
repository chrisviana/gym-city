import * as Dialog from "@radix-ui/react-dialog";
import { Button, Close, Content, ContentForm, Overlay, Title } from "./styles";
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
    if (infoAluno === undefined || !(infoAluno.nome && infoAluno.usuario)) {
      toast.warning("Preencha os campos obrigatórios");
      return;
    }

    if (!isEditing) {
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
            <ContentForm>
              <label>Nome*</label>
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                onChange={handleChange}
                style={{ width: 403 }}
                value={infoAluno?.nome || ""}
                autoComplete="off"
              />
            </ContentForm>

            <ContentForm>
              <label>Idade</label>
              <input
                type="number"
                name="idade"
                placeholder="Idade"
                min="0"
                onChange={handleChange}
                value={infoAluno?.idade || ""}
                autoComplete="off"
              />
            </ContentForm>

            <ContentForm>
              <label>Peso</label>
              <input
                type="text"
                name="peso"
                placeholder="Peso"
                onChange={handleChange}
                value={infoAluno?.peso || ""}
                autoComplete="off"
              />
            </ContentForm>
            <ContentForm>
              <label>Altura</label>
              <input
                type="text"
                name="altura"
                placeholder="Altura"
                onChange={handleChange}
                value={infoAluno?.altura || ""}
                autoComplete="off"
              />
            </ContentForm>
            <ContentForm>
              <label>Nº título*</label>
              <input
                type="text"
                name="usuario"
                placeholder="Nº título"
                onChange={handleChange}
                value={infoAluno?.usuario || ""}
                style={{ width: 183 }}
                autoComplete="off"
              />
            </ContentForm>
          </div>
          <Title>Bioimpedância</Title>
          <div>
            <ContentForm>
              <label>Data</label>
              <input
                type="date"
                style={{ width: 135 }}
                name="data"
                onChange={handleChange}
                value={infoAluno?.data || ""}
                autoComplete="off"
              />
            </ContentForm>
            <ContentForm>
              <label>Instrutor</label>
              <input
                type="text"
                name="instrutor"
                placeholder="Instrutor"
                style={{ width: 262 }}
                onChange={handleChange}
                value={infoAluno?.instrutor || ""}
                autoComplete="off"
              />
            </ContentForm>
            <ContentForm>
              <label>IMC</label>
              <input
                type="text"
                name="imc"
                placeholder="IMC"
                onChange={handleChange}
                value={infoAluno?.imc || ""}
                autoComplete="off"
              />
            </ContentForm>
            <ContentForm>
              <label>% Gordura</label>
              <input
                type="text"
                name="gordura"
                placeholder="% Gordura"
                style={{ width: 189 }}
                onChange={handleChange}
                value={infoAluno?.gordura || ""}
                autoComplete="off"
              />
            </ContentForm>
            <ContentForm>
              <label>Idade Muscular</label>
              <input
                type="number"
                name="idadeMuscular"
                placeholder="Idade muscular"
                style={{ width: 154 }}
                onChange={handleChange}
                value={infoAluno?.idadeMuscular || ""}
                autoComplete="off"
                min="0"
              />
            </ContentForm>
            <ContentForm>
              <label>Gordura Visceral</label>
              <input
                type="text"
                name="gorduraVisceral"
                placeholder="Gordura visceral"
                style={{ width: 154 }}
                onChange={handleChange}
                value={infoAluno?.gorduraVisceral || ""}
                autoComplete="off"
              />
            </ContentForm>
            <ContentForm>
              <label>% De Musculo</label>
              <input
                type="text"
                name="percentMusculo"
                placeholder="% De musculo"
                style={{ width: 154 }}
                onChange={handleChange}
                value={infoAluno?.percentMusculo || ""}
                autoComplete="off"
              />
            </ContentForm>
          </div>
          <Button type="submit">{isEditing ? "Salvar" : "Cadastrar"}</Button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
