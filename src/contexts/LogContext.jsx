import { collection, getDocs, getFirestore, query, orderBy } from "@firebase/firestore";
import app from "../service/firabase";

import React, { createContext } from "react";

const LogContext = createContext({});

const LogProvider = ({ children }) => {

  const firestore = getFirestore(app);

const getLogs = async () => {
  try {
    const logsRef = collection(firestore, "logs"); // Substitua "logs" pelo nome da sua coleção de logs
    const querySnapshot = await getDocs(query(logsRef, orderBy("timestamp", "desc")));
    const logsData = querySnapshot.docs.map((doc) => doc.data());
    return logsData;
  } catch (error) {
    console.error("Erro ao buscar logs:", error);
  }
};

  const LogContextData = {
    getLogs
  };

  return (
    <LogContext.Provider value={LogContextData}>
      {children}
    </LogContext.Provider>
  );
}

export { LogContext, LogProvider };