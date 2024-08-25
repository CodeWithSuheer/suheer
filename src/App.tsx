import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import "./App.css";
const Home = React.lazy(() => import("./page/home/Home"));
// import Home from "./page/home/Home";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
        </Routes>

        <a
          title="whatsapp"
          href="https://api.whatsapp.com/send?phone=923324700802"
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
