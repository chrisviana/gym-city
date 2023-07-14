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

export function ModalAddTreino() {

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close id="closeModal"> X </Close>
        <form onSubmit={""}>
          <Title>Adicionar exercício</Title>
          <div>
            <ContentForm>
              <label>Grupo*</label>
              <Select name="grupo" onChange={"handleSelectChange"}>
                <option value="" disabled selected>
                  Selecione
                </option>
                {/* {grupos &&
                  grupos.map((grupo) => (
                    <option key={grupo.id} value={grupo.id}>
                      {grupo.descricao}
                    </option>
                  ))} */}
              </Select>
            </ContentForm>
            <ContentForm>
              <label>Exercício*</label>
              <Select name="exercicio" onChange={"handleChange"}>
                <option value="" disabled selected>
                  Selecione
                </option>
                {/* {exercicios &&
                  exercicios.map((exercicio) => (
                    <option key={exercicio.id} value={exercicio.descricao}>
                      {exercicio.descricao}
                    </option>
                  ))} */}
              </Select>
            </ContentForm>
            <InfoTreino>
              <ContentForm>
                <label>Séries*</label>
                <input
                  type="text"
                  placeholder="Séries"
                  name="series"
                />
              </ContentForm>
              <ContentForm>
                <label>Repetição/Tempo*</label>
                <input
                  type="text"
                  placeholder="Repetição/Tempo"
                  style={{ width: 155 }}
                  name="reptemp"
                />
              </ContentForm>
              <ContentForm>
                <label>Carga</label>
                <input
                  type="text"
                  placeholder="Carga"
                  name="carga"
                />
              </ContentForm>
              <ContentForm>
                <label>Descanso*</label>
                <input
                  type="text"
                  placeholder="Descanso"
                  style={{ width: 100 }}
                  name="descanso"
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
