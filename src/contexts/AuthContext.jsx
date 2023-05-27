import React, { createContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../service/firabase";
import { setCookie } from "nookies";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { destroyCookie } from "nookies/dist";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const isAuthenticated = false;

  const signOut = () => {
    try {
      destroyCookie(undefined, "@gymcityauth.token");
      navigate("/");
    } catch {
      console.log("erro ao deslogar");
    }
  };

  const signIn = async (email, password) => {
    try {
      const auth = getAuth(app);

      const response = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          return userCredential.user;
        })
        .catch((error) => {
          return error;
        });

      const { accessToken, uid } = response;

      if (accessToken) {
        setCookie(undefined, "@gymcityauth.token", accessToken, {
          maxAge: 60 * 60 * 24 * 30,
          path: "/",
        });

        setUser({
          uid,
          email,
        });

        toast.success("Logado com sucesso");
        navigate("/app");
      } else {
        toast.error("E-mail ou Senha inválidos");
      }
    } catch (err) {
      toast.error("Erro ao acessar", err);
    }
  };

  const authContextData = {
    user,
    isAuthenticated,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
