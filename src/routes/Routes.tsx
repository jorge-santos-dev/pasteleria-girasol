import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Pasteles from "../pages/Pasteles";
import Postres from "../pages/Postres";
import Conocenos from "../pages/Conocenos";
import Contactanos from "../pages/contactanos/Contactanos";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pasteles" element={<Pasteles />} />
      <Route path="/postres" element={<Postres />} />
      <Route path="/conocenos" element={<Conocenos />} />
      <Route path="/contactanos" element={<Contactanos />} />
    </Routes>
  );
}
