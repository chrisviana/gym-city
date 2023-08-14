import React, { createContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
import app from "../service/firabase";
import { setCookie } from "nookies";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { destroyCookie } from "nookies/dist";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const isAuthenticated = !!user;

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        setUser({ uid, email });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signOut = () => {
    try {
      destroyCookie(undefined, "@gymcityauth.token");
      localStorage.removeItem("@gymcityauth.token");
      navigate("/");
    } catch {
      toast.error("Erro ao deslogar");
    }
  };

  const signIn = async (email, password) => {
    try {
      const auth = getAuth(app);

      const response = await signInWithEmailAndPassword(
        auth,
        email,
        btoa(password)
      )
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

        localStorage.setItem("@gymcityauth.token", accessToken);
        localStorage.setItem("@emailLogado", email)

        setUser({
          uid,
          email,
        });

        toast.success("Logado com sucesso");
        navigate("/app/aluno");
      } else {
        toast.error("E-mail ou Senha inválidos");
      }
    } catch (err) {
      console.log(err);
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
