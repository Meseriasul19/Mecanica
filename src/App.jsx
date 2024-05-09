import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { NC } from "./Components/Pages/NC";
import { Aplicatie } from "./Components/Pages/Aplicatie";
import { Teorie } from "./Components/Pages/Teorie";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<NC />} />
            <Route path="/blog" element={<Aplicatie />} />
            <Route path="/contact" element={<Teorie />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;