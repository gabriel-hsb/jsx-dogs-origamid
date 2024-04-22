import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./pages/loginPages/Login";

import "./styles.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<HomeFeed />} /> */}
          <Route path="login/*" element={<Login />} />
          <Route path="conta/*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
