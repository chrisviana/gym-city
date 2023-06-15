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

const GrupoContext = createContext({});

const GrupoProvaider = ({ children }) => {
  const firestore = getFirestore(app);

  const saveGrupo = async (infoGrupo) => {
    try {
      const docRef = await addDoc(collection(firestore, "grupos"), infoGrupo);
      const grupoId = docRef.id;

      const grupoComId = {
        ...infoGrupo,
        id: grupoId,
      };

      await setDoc(doc(firestore, "grupos", grupoId), grupoComId);

      toast.success("Grupo cadastrado com sucesso");
      document.getElementById("closeModal").click();
      getGrupo();
    } catch (error) {
      toast.error("Erro ao salvar o grupo:", error);
    }
  };

  const getGrupo = async () => {
    const gruposCollection = collection(firestore, "grupos");
    const gruposSnapshot = await getDocs(gruposCollection);
    const gruposList = gruposSnapshot.docs.map((doc) => doc.data());
    return gruposList;
  };

  const deleteGrupo = async (id) => {
    const grupoRef = doc(firestore, "grupos", id);
    try {
      await deleteDoc(grupoRef);
      toast.success("Grupo excluído com sucesso!");
      document.getElementById("closeModal").click();
    } catch (error) {
      toast.error("Erro ao excluir grupo:", error);
    }
  };

  const editarGrupo = async (id, infoAluno) => {
    const grupoRef = doc(firestore, "grupos", id);
    try {
      await updateDoc(grupoRef, infoAluno);
      toast.success("Grupo atualizado com sucesso!");
      document.getElementById("closeModal").click();
    } catch (error) {
      toast.error("Erro ao editar grupo:", error);
    }
  };

  const authContextData = {
    saveGrupo,
    getGrupo,
    deleteGrupo,
    editarGrupo,
  };

  return (
    <GrupoContext.Provider value={authContextData}>
      {children}
    </GrupoContext.Provider>
  );
};

export { GrupoContext, GrupoProvaider };
