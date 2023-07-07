import * as Dialog from "@radix-ui/react-dialog";
import {
  Button,
  Close,
  Content,
  ContentForm,
  InfoTreino,
  Overlay,
  Select,
  Title,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TreinoContext } from "../../../contexts/TreinoContext";

export function ModalAddTreino({ setTreino, adicionarTreino}) {
  const { getGrupoTreino, getExercicioPorGrupo } = useContext(TreinoContext);

  const [grupos, setGrupos] = useState();
  const [exercicios, setExercicios] = useState();
  const [grupoSelecionado, setGrupoSelecionado] = useState("");

  useEffect(() => {
    getGrupoTreino().then((grupoList) => {
      setGrupos(grupoList);
    });
  }, []);

  useEffect(() => {
    if (grupoSelecionado) {
      getExercicioPorGrupo(grupoSelecionado).then((exercicioList) => {
        setExercicios(exercicioList);
      });
    }
  }, [grupoSelecionado]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTreino((prevInfoTreino) => ({
      ...prevInfoTreino,
      [name]: value,
    }));
  };

  const handleGrupoChange = (event) => {
    const selectedGrupo = event.target.value;
    setGrupoSelecionado(selectedGrupo);
  };

  const handleSelectChange = (event) => {
    handleGrupoChange(event);
    handleChange(event);
  };

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close id="closeModal"> X </Close>
        <form  onSubmit={adicionarTreino}>
          <Title>Adicionar exercício</Title>
          <div>
            <ContentForm>
              <label>Grupo*</label>
              <Select name="grupo" onChange={handleSelectChange}>
                <option value="" disabled selected>
                  Selecione
                </option>
                {grupos &&
                  grupos.map((grupo) => (
                    <option key={grupo.id} value={grupo.id}>
                      {grupo.descricao}
                    </option>
                  ))}
              </Select>
            </ContentForm>
            <ContentForm>
              <label>Exercício*</label>
              <Select name="exercicio" onChange={handleChange}>
                <option value="" disabled selected>
                  Selecione
                </option>
                {exercicios &&
                  exercicios.map((exercicio) => (
                    <option key={exercicio.id} value={exercicio.id}>
                      {exercicio.descricao}
                    </option>
                  ))}
              </Select>
            </ContentForm>
            <InfoTreino>
              <ContentForm>
                <label>Séries*</label>
                <input
                  type="text"
                  placeholder="Séries"
                  name="series"
                  onChange={handleChange}
                />
              </ContentForm>
              <ContentForm>
                <label>Repetição/Tempo*</label>
                <input
                  type="text"
                  placeholder="Repetição/Tempo"
                  style={{ width: 155 }}
                  name="reptemp"
                  onChange={handleChange}
                />
              </ContentForm>
              <ContentForm>
                <label>Carga*</label>
                <input
                  type="text"
                  placeholder="Carga"
                  name="carga"
                  onChange={handleChange}
                />
              </ContentForm>
              <ContentForm>
                <label>Descanso*</label>
                <input
                  type="text"
                  placeholder="Descanso"
                  style={{ width: 100 }}
                  name="descanso"
                  onChange={handleChange}
                />
              </ContentForm>
            </InfoTreino>
          </div>
          <Button type="submit">Adicionar</Button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
