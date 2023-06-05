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

  const deleteAluno = async (id) => {
    const alunoRef = doc(firestore, "alunos", id);
    try {
      await deleteDoc(alunoRef);
      toast.success("Aluno excluído com sucesso!");
      document.getElementById("closeModal").click();
    } catch (error) {
      toast.error("Erro ao excluir aluno:", error);
    }
  };

  const authContextData = {
    saveAluno,
    getAluno,
    deleteAluno,
  };

  return (
    <AlunoContext.Provider value={authContextData}>
      {children}
    </AlunoContext.Provider>
  );
};

export { AlunoContext, AlunoProvider };
