import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Exercises } from "./pages/Exercises/Exercises";
import "./App.css";
import { Menu } from "./components/Menu";
import Chords from "./pages/Chords/Chords";
import Metronome from "./pages/Metronome/Metronome";

export function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/metronome" element={<Metronome />} />
        <Route path="/chords/:type" element={<Chords />} />
        <Route path="/exercise/:type/:id" element={<Exercises />}/>
      </Routes>
    </BrowserRouter>
  );
}
