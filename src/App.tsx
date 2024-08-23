import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/home/Home";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <a
          title="whatsapp"
          href="https://api.whatsapp.com/send?phone=966574259637"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn flex items-center gap-2 rounded-full p-2 sm:p-2"
        >
          <FaWhatsapp size={31} />
        </a>
      </BrowserRouter>
    </>
  );
}

export default App;
