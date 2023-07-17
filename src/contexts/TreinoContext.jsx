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

  const saveExercicioTreino = async (infoExercicio) => {
    try {
      const docRef = await addDoc(
        collection(firestore, "exercicioTreino"),
        infoExercicio
      );
      const treinoId = docRef.id;
  
      const treinoComId = {
        ...infoExercicio,
        id: treinoId,
      };
  
      await setDoc(doc(firestore, "exercicioTreino", treinoId), treinoComId);
  
      toast.success("Exercício adicionado com sucesso!");
      getTreino();
  
      return treinoId; // Retorna o ID do treino
  
    } catch (error) {
      toast.error("Erro ao salvar o treino:", error);
      return null; // Retorna null em caso de erro
    }
  };
  

  const getTreino = async () => {
    const treinoCollection = collection(firestore, "treinos");
    const treinosSnapshot = await getDocs(treinoCollection);
    const treinosList = treinosSnapshot.docs.map((doc) => doc.data());
    return treinosList;
  };

  const deleteTreino = async (id) => {
    const exercicioRef = doc(firestore, "treinos", id);
    try {
      await deleteDoc(exercicioRef);
      toast.success("Treino excluído com sucesso!");
      document.getElementById("closeModal").click();
    } catch (error) {
      toast.error("Erro ao excluir o treino:", error);
    }
  };

  const editarTreino = async (id, infoTreno) => {
    const grupoRef = doc(firestore, "treinos", id);
    try {
      await updateDoc(grupoRef, infoTreno);
      toast.success("Treino atualizado com sucesso!");
    } catch (error) {
      console.log("Error:::: ", error);
      toast.error("Erro ao atualizar treino:", error);
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
      return null;
    }
  };

  const getExercicioTreinoById = async (id) => {
    const treinoRef = doc(firestore, "exercicioTreino", id);
    const treinoDoc = await getDoc(treinoRef);
  
    if (treinoDoc.exists()) {
      const treinoData = treinoDoc.data();;
      return treinoData;
    } else {
      // O documento com o ID fornecido não existe
      return null;
    }
  };

  const editarExericioTreino = async (id, infoTreno) => {
    const grupoRef = doc(firestore, "exercicioTreino", id);
    try {
      await updateDoc(grupoRef, infoTreno);
      toast.success("Exercício atualizado com sucesso!");
    } catch (error) {
      console.log("Error: ", error)
      toast.error("Erro ao atualizar exercício", error);
    }
  };



  const authContextData = {
    saveTreino,
    getTreino,
    deleteTreino,
    editarTreino,
    getAlunoTreino,
    getGrupoTreino,
    getExercicioPorGrupo,
    getTreinoById,
    saveExercicioTreino,
    getExercicioTreinoById,
    editarExericioTreino
  };

  return (
    <TreinoContext.Provider value={authContextData}>
      {children}
    </TreinoContext.Provider>
  );
};

export { TreinoContext, TreinoProvaider };
