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

import { TreinoContext } from "../../../contexts/TreinoContext";
import { toast } from "react-toastify";

export function ModalEditTreino({ exercicio, atualizarLista, setIsEditing }) {

  const { getGrupoTreino, getExercicioPorGrupo, editarExericioTreino  } = useContext(TreinoContext)
  const [grupos, setGrupos] = useState();
  const [exercicios, setExercicios] = useState();
 
  const [grupoSelecionado, setGrupoSelecionado] = useState(exercicio.grupo);
  const [exercicioEditado, setExercicioEditado] = useState(exercicio);

  useEffect(() => {
    setExercicioEditado(exercicio);
    setIsEditing(true)
  }, [exercicio])


  const handleChange = (event) => {
    const { name, value } = event.target;
    setExercicioEditado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
  }, [grupoSelecionado, setExercicioEditado]);

  const handleGrupoChange = (event) => {
    const selectedGrupo = event.target.value;
    setGrupoSelecionado(selectedGrupo);
    setExercicioEditado((prevState) => ({
      ...prevState,
      exercicio: "",
    }));
  };

  const handleSelectChange = (event) => {
    handleGrupoChange(event);
    handleChange(event);
  };

  const editarTreino = (event) => {

   if(exercicioEditado.exercicio === "") {
    event.preventDefault();
    toast.warning("Informe um exercício!")
    return false
   }

    event.preventDefault();
    editarExericioTreino(exercicio.id, exercicioEditado)
    atualizarLista()
    document.getElementById("closeModal").click();
  }


  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close id="closeModal"> X </Close>
        <form onSubmit={editarTreino}>
          <Title>Adicionar exercício</Title>
          <div>
            <ContentForm>
              <label>Grupo*</label>
              <Select name="grupo" onChange={handleSelectChange} value={exercicioEditado.grupo}>
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
              <Select name="exercicio" onChange={handleChange} value={exercicioEditado.exercicio}>
                <option value="" disabled selected>
                  Selecione
                </option>
                {exercicios &&
                  exercicios.map((exercicio) => (
                    <option key={exercicio.id} value={exercicio.descricao}>
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
                  value={exercicioEditado.series}
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
                  value={exercicioEditado.reptemp}
                />
              </ContentForm>
              <ContentForm>
                <label>Carga</label>
                <input
                  type="text"
                  placeholder="Carga"
                  name="carga"
                  onChange={handleChange}
                  value={exercicioEditado.carga}
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
                  value={exercicioEditado.descanso}
                />
              </ContentForm>
            </InfoTreino>
          </div>
          <Button type="submit">Salvar</Button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
