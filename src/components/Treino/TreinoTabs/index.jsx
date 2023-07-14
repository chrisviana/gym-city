import { ButtonTabs, ContentTabs, ListTabs, RootTabs } from "./style";
import { ButtonCadastroTreino } from "../ButtonCadastro";
import { LisTreino } from "../ListTreino";

export function TreinoTabs() {
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
        <LisTreino

        />
        <ButtonCadastroTreino

        />
      </ContentTabs>
      <ContentTabs value="tab2">
        <LisTreino

        />
        <ButtonCadastroTreino

        />
      </ContentTabs>
      <ContentTabs value="tab3">
        <LisTreino

        />
        <ButtonCadastroTreino

        />
      </ContentTabs>
      <ContentTabs value="tab4">
        <LisTreino

        />
        <ButtonCadastroTreino

        />
      </ContentTabs>
      <ContentTabs value="tab5">
        <LisTreino

        />
        <ButtonCadastroTreino

        />
      </ContentTabs>
    </RootTabs>
  );
}
