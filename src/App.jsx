import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Acceuil from './pages/Acceuil';
import Titredelalocation from './pages/Titredelalocation';
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Acceuil" element={<Acceuil />} /> 
        <Route path="/logement/:id" element={<Titredelalocation />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;





