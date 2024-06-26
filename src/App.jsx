import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserStorage } from "./UserContext";
import ScrollToTop from "./scripts/scrollToTop";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeFeed from "./pages/HomeFeed";
import Login from "./pages/loginPages/Login";
import Conta from "./pages/contaPages/Conta";
import Foto from "./pages/foto";
import Perfil from "./pages/Perfil";
import NotFound from "./pages/NotFound";

import "./styles.css";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<HomeFeed />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <Conta />
                </ProtectedRoute>
              }
            />
            <Route path="foto/:id" element={<Foto />} />
            <Route path="perfil/:user" element={<Perfil />} />

            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
