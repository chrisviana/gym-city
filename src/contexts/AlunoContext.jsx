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

const AlunoContext = createContext({});

const AlunoProvider = ({ children }) => {
  const firestore = getFirestore(app);

  const saveAluno = async (infoAluno) => {
    try {
      const docRef = await addDoc(collection(firestore, "alunos"), infoAluno);
      const alunoId = docRef.id;

      const alunoComId = {
        ...infoAluno,
        id: alunoId,
      };

      await setDoc(doc(firestore, "alunos", alunoId), alunoComId);

      toast.success("Aluno cadastrado com sucesso");
      document.getElementById("closeModal").click();
      getAluno();
    } catch (error) {
      toast.error("Erro ao salvar o aluno:", error);
    }
  };

  const getAluno = async () => {
    const alunosCollection = collection(firestore, "alunos");
    const alunosSnapshot = await getDocs(alunosCollection);
    const alunosList = alunosSnapshot.docs.map((doc) => doc.data());
    return alunosList;
  };

  const deleteAluno = async (id, usuario) => {
    const alunoRef = doc(firestore, "alunos", id);

    const treinosSnapshot = await getDocs(collection(firestore, "treinos"));
    const treinosDoUsuario = treinosSnapshot.docs.filter(
      (doc) => doc.data().usuario === usuario
    );

    if (treinosDoUsuario.length > 0) {
      toast.error("Não é possível excluir o aluno. Existem treinos associados a ele.");
      document.getElementById("closeModal").click();
      return;
    }
    try {
      await deleteDoc(alunoRef);
      toast.success("Aluno excluído com sucesso!");
      document.getElementById("closeModal").click();
    } catch (error) {
      toast.error("Erro ao excluir aluno:", error);
    }
  };

  const editarAluno = async (id, infoAluno) => {
    const alunoRef = doc(firestore, "alunos", id);
    try {
      await updateDoc(alunoRef, infoAluno);
      toast.success("Aluno atualizado com sucesso!");
      document.getElementById("closeModal").click();
    } catch (error) {
      toast.error("Erro ao editar aluno:", error);
    }
  };

  const authContextData = {
    saveAluno,
    getAluno,
    deleteAluno,
    editarAluno,
  };

  return (
    <AlunoContext.Provider value={authContextData}>
      {children}
    </AlunoContext.Provider>
  );
};

export { AlunoContext, AlunoProvider };
