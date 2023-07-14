import { useContext, useEffect, useState } from "react";
import {
  ButtonCadastrar,
  ButtonImprimir,
  Container,
  Content,
  ContentButton,
  ContentForm,
  Head,
  Input,
  TextArea,
  Title,
} from "./style";
import { AlunoSearch } from "../../components/Treino/AlunoSearch";
import { TreinoTabs } from "../../components/Treino/TreinoTabs";
import { TreinoContext } from "../../contexts/TreinoContext";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export function CadastroTreino() {

  const [aluno, setAluno] = useState("")
  const [alunoUsuario, setAlunoUsuario] = useState("")
  const [dataTreino, setDataTreino] = useState("");

  return (
    <Container>
      <Content>
        <Title>Cadastro de treino</Title>
        <Head>
          <AlunoSearch
            setAluno={setAluno}
            setAlunoUsuario={setAlunoUsuario}
            alunoDigitado={aluno}
            setDataTreino={setDataTreino}
           />
        </Head>
        <TreinoTabs
        />
        <ContentForm>
          <label>Instrutor*</label>
          <Input
            placeholder="Instrutor"
            type="text"
          />
        </ContentForm>
        <ContentForm>
          <label>Observações</label>
          <TextArea
            placeholder="Observações"
            type="text"
          />
        </ContentForm>
        <ContentButton>
          <ButtonCadastrar>Cadastrar</ButtonCadastrar>
          <ButtonImprimir>Imprimir</ButtonImprimir>
        </ContentButton>
      </Content>
    </Container>
  );
}
