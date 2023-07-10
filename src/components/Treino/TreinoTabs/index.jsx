import { ButtonTabs, ContentTabs, ListTabs, RootTabs } from "./style";
import { ButtonCadastroTreino } from "../ButtonCadastro";
import { LisTreino } from "../ListTreino";

export function TreinoTabs( {adicionarTreino, treinos, setTreino }) {


  return (
    <RootTabs className="TabsRoot" defaultValue="tab1">
      <ListTabs className="TabsList" aria-label="Manage your account">
        <ButtonTabs className="TabsTrigger" value="tab1">
          Treino A
        </ButtonTabs>
        <ButtonTabs className="TabsTrigger" value="tab2">
          Treino B
        </ButtonTabs>
        <ButtonTabs className="TabsTrigger" value="tab3">
          Treino C
        </ButtonTabs>
        <ButtonTabs className="TabsTrigger" value="tab4">
          Treino D
        </ButtonTabs>
        <ButtonTabs className="TabsTrigger" value="tab5">
          Treino E
        </ButtonTabs>
      </ListTabs>
      <ContentTabs value="tab1">
        <LisTreino treino={treinos.treinoA} />
        <ButtonCadastroTreino
          setTreino={setTreino}
          adicionarTreino={(event) => adicionarTreino(event, "treinoA")}
        />
      </ContentTabs>
      <ContentTabs value="tab2">
        <LisTreino treino={treinos.treinoB} />
        <ButtonCadastroTreino
          setTreino={setTreino}
          adicionarTreino={(event) => adicionarTreino(event, "treinoB")}
        />
      </ContentTabs>
      <ContentTabs value="tab3">
        <LisTreino treino={treinos.treinoC} />
        <ButtonCadastroTreino
          setTreino={setTreino}
          adicionarTreino={(event) => adicionarTreino(event, "treinoC")}
        />
      </ContentTabs>
      <ContentTabs value="tab4">
        <LisTreino treino={treinos.treinoD} />
        <ButtonCadastroTreino
          setTreino={setTreino}
          adicionarTreino={(event) => adicionarTreino(event, "treinoD")}
        />
      </ContentTabs>
      <ContentTabs value="tab5">
        <LisTreino treino={treinos.treinoE} />
        <ButtonCadastroTreino
          setTreino={setTreino}
          adicionarTreino={(event) => adicionarTreino(event, "treinoE")}
        />
      </ContentTabs>
    </RootTabs>
  );
}