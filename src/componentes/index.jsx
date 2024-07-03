import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navegacion/navbar";  // ajusta la ruta según tu estructura de carpetas
import CrearBlog from "../componentes/crearblog";  // ajusta la ruta según tu estructura de carpetas
import Footer from './footer' // ajusta la ruta según tu estructura de carpetas

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"  />
        <Route path="/viajes"  element={<div>Contenido de Viajes</div>} />
        <Route path="/deportes" element={<div>Contenido de Deportes</div>} />
        <Route path="/tecnologia" element={<div>Contenido de Tecnología</div>} />
        <Route path="/educacion" element={<div>Contenido de Educación</div>} />
        <Route path="/entretenimiento" element={<div>Contenido de Entretenimiento</div>} />
        <Route path="/crearblog" element={<CrearBlog />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
