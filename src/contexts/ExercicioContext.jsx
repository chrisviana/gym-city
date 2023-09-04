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
} from "firebase/firestore";

const ExercicioContext = createContext({});

const ExercicioProvaider = ({ children }) => {
  const firestore = getFirestore(app);

  const saveExercicio = async (infoExercicio) => {
    try {
      const docRef = await addDoc(
        collection(firestore, "exercicios"),
        infoExercicio
      );
      const exercicioId = docRef.id;

      const exercicioComId = {
        ...infoExercicio,
        id: exercicioId,
      };

      await setDoc(doc(firestore, "exercicios", exercicioId), exercicioComId);

      toast.success("Exercício cadastrado com sucesso");
      document.getElementById("closeModal").click();
    } catch (error) {
      toast.error("Erro ao salvar o exercício:", error);
    }
  };

  const getExercicio = async () => {
    const gruposCollection = collection(firestore, "exercicios");
    const gruposSnapshot = await getDocs(gruposCollection);
    const gruposList = gruposSnapshot.docs.map((doc) => doc.data());
    return gruposList;
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

  const getGrupo = async () => {
    const gruposCollection = collection(firestore, "grupos");
    const gruposSnapshot = await getDocs(gruposCollection);
    const gruposList = gruposSnapshot.docs.map((doc) => doc.data());
    return gruposList;
  };

  const authContextData = {
    saveExercicio,
    getExercicio,
    deleteExercicio,
    editarExercicio,
    getGrupo,
  };

  return (
    <ExercicioContext.Provider value={authContextData}>
      {children}
    </ExercicioContext.Provider>
  );
};

export { ExercicioContext, ExercicioProvaider };
