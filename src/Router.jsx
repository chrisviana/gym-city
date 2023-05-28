import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/default";
import { Aluno } from "./page/Aluno";
import { Login } from "./page/Login";
import { Grupo } from "./page/Grupo";
import { Exercicio } from "./page/Exercicio";
import { Treino } from "./page/Treino";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/app" element={<DefaultLayout />}>
        <Route path="/app/aluno" element={<Aluno />} />
        <Route path="/app/grupo" element={<Grupo />} />
        <Route path="/app/exercicio" element={<Exercicio />} />
        <Route path="/app/treino" element={<Treino />} />
      </Route>
    </Routes>
  );
}
