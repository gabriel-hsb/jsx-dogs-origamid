import { createContext, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from "./scripts/apiBackend";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLogged, setIsLogged] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogout = useCallback(
    async function () {
      setData(null);
      setIsLogged(false);
      setIsLoading(false);
      setError(null);

      window.localStorage.removeItem("token");

      navigate("login");
    },
    [navigate]
  );

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setIsLogged(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setIsLoading(true);

      // tries to log in posting the username and password
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      // if token is not ok, throws error received from api
      if (!tokenRes.ok) throw new Error('Usuário inválido');

      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);

      // if token is ok, navigate to .../conta
      await getUser(token);
      navigate("conta");
    } catch (err) {
      setError(err.message);
      setIsLogged(false);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // if a token is stored at localStorage, try to log in automatically
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setIsLoading(true);

          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);

          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (err) {
          // if there is not a token, logs out
          userLogout();
        } finally {
          setIsLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        data,
        error,
        isLoading,
        isLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
