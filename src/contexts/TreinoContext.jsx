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

      return treinoId;

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
      

      const treinosQuery = query(
        collection(firestore, "treinos"),
        where("usuario", "==", infoExercicio.alunoUsuario)
      );

      const treinosSnapshot = await getDocs(treinosQuery);

      if (!treinosSnapshot.empty) {
        const treinoDocRef = treinosSnapshot.docs[0].ref;
        const treinoDoc = treinosSnapshot.docs[0].data();
        const updatedExercicios = [...treinoDoc.exercicios, treinoId];
  
        await updateDoc(treinoDocRef, { exercicios: updatedExercicios });
      }
      
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
      // Obtenha o documento do treino para acessar os exercícios
      const treinoSnapshot = await getDoc(exercicioRef);
      
      if (treinoSnapshot.exists()) {
        // Obtenha a lista de exercícios do treino
        const treinoData = treinoSnapshot.data();
        const exercicios = treinoData.exercicios || [];
        
        // Exclua cada exercício individualmente
        for (const exercicioId of exercicios) {
          const exercicioRef = doc(firestore, "exercicioTreino", exercicioId);
          await deleteDoc(exercicioRef);
        }
        
        // Exclua o documento do treino após excluir todos os exercícios
        await deleteDoc(exercicioRef);
        
        toast.success("Treino excluído com sucesso!");
        document.getElementById("closeModal").click();
      } else {
        toast.error("Treino não encontrado.");
      }
    } catch (error) {
      toast.error("Erro ao excluir o treino:", error);
    }
  };

  const editarTreino = async (id, infoTreno) => {
  const grupoRef = doc(firestore, "treinos", id);

  let existingData;
  try {
    const docSnapshot = await getDoc(grupoRef);
    if (docSnapshot.exists()) {
      existingData = docSnapshot.data();
    } else {
      toast.error("Documento não encontrado!");
      return;
    }
  } catch (error) {
    toast.error("Erro ao ler o documento:", error);
    return;
  }

  const previousDataRef = collection(firestore, "previousDataCollection");
  try {
    await addDoc(previousDataRef, existingData);
  } catch (error) {
    return false;
  }

  // Step 3: Update the document with new data
  try {
    await updateDoc(grupoRef, infoTreno);
    toast.success("Treino atualizado com sucesso!");
  } catch (error) {
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


  const getTreinoByUsuario = async (usuario) => {
    const treinoQuery = query(collection(firestore, "treinos"), where("usuario", "==", usuario));
    const treinoSnapshot = await getDocs(treinoQuery);
  
    if (!treinoSnapshot.empty) {
      const treinoDocs = treinoSnapshot.docs.map((doc) => doc.data());
      return treinoDocs;
    } else {
      return null;
    }
  };

  const getExercioTreinoByUsuario = async (usuario) => {
    const treinoQuery = query(collection(firestore, "exercicioTreino"), where("alunoUsuario", "==", usuario));
    const treinoSnapshot = await getDocs(treinoQuery);
  
    if (!treinoSnapshot.empty) {
      const treinoDocs = treinoSnapshot.docs.map((doc) => doc.id); // Retorna apenas o ID do documento
      return treinoDocs;
    } else {
      return [];
    }
  };

  const getExercicioTreinoById = async (id) => {
    const treinoRef = doc(firestore, "exercicioTreino", id);
    const treinoDoc = await getDoc(treinoRef);
  
    if (treinoDoc.exists()) {
      const treinoData = treinoDoc.data();;
      return treinoData;
    } else {
      return null;
    }
  };

  const editarExericioTreino = async (id, infoTreno) => {
    const grupoRef = doc(firestore, "exercicioTreino", id);
    try {
      await updateDoc(grupoRef, infoTreno);
      toast.success("Exercício atualizado com sucesso!");
    } catch (error) {
      toast.error("Erro ao atualizar exercício", error);
    }
  };

  const deleteExercicioTreino = async (id) => {
    const exercicioRef = doc(firestore, "exercicioTreino", id);
    try {
      await deleteDoc(exercicioRef);
      toast.success("Exercício excluído com sucesso!");
      document.getElementById("closeModal").click();
    } catch (error) {
      toast.error("Erro ao excluir o treino:", error);
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
    editarExericioTreino,
    deleteExercicioTreino,
    getTreinoByUsuario,
    getExercioTreinoByUsuario
  };

  return (
    <TreinoContext.Provider value={authContextData}>
      {children}
    </TreinoContext.Provider>
  );
};

export { TreinoContext, TreinoProvaider };
