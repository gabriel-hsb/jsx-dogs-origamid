import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./pages/loginPages/Login";

import "./styles.css";
import Footer from "./components/Footer";
import Conta from "./pages/contaPages/Conta";
import SrcNotFound from "./pages/SrcNotFound";
import HomeFeed from "./pages/HomeFeed";

import ScrollToTop from "./scripts/scrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomeFeed />} />
          <Route path="login/*" element={<Login />} />
          <Route path="conta/*" element={<Conta />} />
          <Route path="/*" element={<SrcNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
