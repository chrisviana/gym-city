import { Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/default";
import { Aluno } from "./page/Aluno";
import { Login } from "./page/Login";
import { Grupo } from "./page/Grupo";
import { Exercicio } from "./page/Exercicio";
import { Treino } from "./page/Treino";
import { AlunoProvider } from "./contexts/AlunoContext";
import { GrupoProvaider } from "./contexts/GrupoContext";
import { ExercicioProvaider } from "./contexts/ExercicioContext";

export function Router() {
  function PrivateRoute({ children }) {
    const token = localStorage.getItem("@gymcityauth.token");
    return token ? <>{children}</> : <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/app"
        element={
          <PrivateRoute>
            <DefaultLayout />
          </PrivateRoute>
        }
      >
        <Route
          path="/app/aluno"
          element={
            <AlunoProvider>
              <Aluno />
            </AlunoProvider>
          }
        />
        <Route
          path="/app/grupo"
          element={
            <GrupoProvaider>
              <Grupo />
            </GrupoProvaider>
          }
        />
        <Route
          path="/app/exercicio"
          element={
            <ExercicioProvaider>
              <Exercicio />
            </ExercicioProvaider>
          }
        />
        <Route path="/app/treino" element={<Treino />} />
      </Route>
    </Routes>
  );
}
