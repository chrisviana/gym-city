import React, { createContext } from "react";
import app from "../service/firabase";
import { toast } from "react-toastify";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
  query,
  where,
  getDoc,
} from "firebase/firestore";

const TreinoContext = createContext({});

const TreinoProvaider = ({ children }) => {
  const firestore = getFirestore(app);

  const saveTreino = async (infoTreino) => {
    try {
      const docRef = await addDoc(
        collection(firestore, "treinos"),
        infoTreino
      );
      const treinoId = docRef.id;

      const treinoComId = {
        ...infoTreino,
        id: treinoId,
      };

      await setDoc(doc(firestore, "treinos", treinoId), treinoComId);

      toast.success("Treino cadastrado com sucesso");
      getTreino();
    } catch (error) {
      toast.error("Erro ao salvar o treino:", error);
    }
  };

  const getTreino = async () => {
    const treinoCollection = collection(firestore, "treinos");
    const treinosSnapshot = await getDocs(treinoCollection);
    const treinosList = treinosSnapshot.docs.map((doc) => doc.data());
    return treinosList;
  };

  const deleteExercicio = async (id) => {
    const exercicioRef = doc(firestore, "exercicios", id);
    try {
      await deleteDoc(exercicioRef);
      toast.success("Exercício excluído com sucesso!");
      document.getElementById("closeModal").click();
    } catch (error) {
      toast.error("Erro ao excluir grupo:", error);
    }
  };

  const editarExercicio = async (id, infoAluno) => {
    const grupoRef = doc(firestore, "exercicios", id);
    try {
      await updateDoc(grupoRef, infoAluno);
      toast.success("Exercício atualizado com sucesso!");
      document.getElementById("closeModal").click();
    } catch (error) {
      toast.error("Erro ao editar grupo:", error);
    }
  };

  const getAlunoTreino = async () => {
    const alunosRef = collection(firestore, 'alunos');
    const q = query(alunosRef);
    const snapshot = await getDocs(q);
    const results = snapshot.docs.map((doc) => {
      const data = doc.data();
      return { nome: data.nome, usuario: data.usuario };
    });
    return results;
  };

  const getGrupoTreino = async () => {
    const gruposCollection = collection(firestore, "grupos");
    const gruposSnapshot = await getDocs(gruposCollection);
    const gruposList = gruposSnapshot.docs.map((doc) => doc.data());
    return gruposList;
  };

  const getExercicioPorGrupo = async (idGrupo) => {

    try {
      const exerciciosRef = collection(firestore, 'exercicios');
      const q = query(exerciciosRef, where('grupoId', '==', idGrupo));
      const querySnapshot = await getDocs(q);
  
      const exercicios = [];
      querySnapshot.forEach((doc) => {
        exercicios.push(doc.data());
      });
  
      return exercicios;
    } catch (error) {
      console.error('Erro ao buscar exercícios por grupo:', error);
      throw error;
    }
  }


  const getTreinoById = async (id) => {
    const treinoRef = doc(firestore, "treinos", id);
    const treinoDoc = await getDoc(treinoRef);
  
    if (treinoDoc.exists()) {
      const treinoData = treinoDoc.data();;
      return treinoData;
    } else {
      // O documento com o ID fornecido não existe
      console.log("Treino não encontrado");
      return null;
    }
  };
  const authContextData = {
    saveTreino,
    getTreino,
    deleteExercicio,
    editarExercicio,
    getAlunoTreino,
    getGrupoTreino,
    getExercicioPorGrupo,
    getTreinoById
  };

  return (
    <TreinoContext.Provider value={authContextData}>
      {children}
    </TreinoContext.Provider>
  );
};

export { TreinoContext, TreinoProvaider };
