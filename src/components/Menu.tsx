import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  FileMusic,
  Metronome,
  Minus,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/ms-logo.svg";

interface Chord {
  id: string;
  name: string;
}

export function Menu() {
  const [open, setOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);

  const chords: Chord[] = [
    { id: "a", name: "Lá maior" },
    { id: "c", name: "Dó maior" },
    { id: "d", name: "Ré maior" },
  ];

  return (
    <aside
      className={`h-screen bg-slate-900  p-4 transition-all duration-300 ${open ? "w-64" : "w-20"} justify-between border-e border-gray-100 bg-white`}
    >
      <div className="flex items-center justify-between mb-8 relative">
        <img src={logo} alt="logo" />

        <button
          onClick={() => setOpen(!open)}
          className={`border bg-white hover:bg-gray-300 cursor-pointer p-2 rounded absolute ${open ? "right-[-30px]" : "mt-10 right-[-40px]"}`}
        >
          {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      <div className="mb-4">
        {open && <p className="text-gray-400 text-sm mb-2">FERRAMENTA</p>}

        <NavLink
          to="/metronome"
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded hover:bg-gray-200 ${open ? "" : "justify-center"}  ${
              isActive ? "bg-gray-200 font-semibold text-[#1788c5]" : ""
            }`
          }
        >
          <Metronome size={20} />
          {open && <span>Metrônomo</span>}
        </NavLink>
      </div>

      <div className="mb-4">
        {open && <p className="text-gray-400 text-sm mb-2">ACORDES</p>}

        <NavLink
          to="/chords/major"
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded hover:bg-gray-200 ${open ? "" : "justify-center"} ${
              isActive ? "bg-gray-200 font-semibold text-[#1788c5]" : ""
            }`
          }
        >
          <Plus size={20} />
          {open && <span>Maiores</span>}
        </NavLink>

        <NavLink
          to="/chords/minor"
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded hover:bg-gray-200 ${open ? "" : "justify-center"} ${
              isActive ? "bg-gray-200 font-semibold text-[#1788c5]" : ""
            }`
          }
        >
          <Minus size={20} />
          {open && <span>Menores</span>}
        </NavLink>
      </div>

      <hr className="mb-4 text-neutral-300" />

      <div className="mb-4">
        {open && <p className="text-gray-400 text-sm mb-2">EXERCÍCIOS</p>}

        <button
          onClick={() => setOpenDropdown(!openDropdown)}
          className={`flex  items-center w-full p-2 hover:bg-gray-300 rounded ${open ? "justify-between" : "justify-center"}`}
        >
          <div className="flex items-center gap-3">
            <FileMusic size={20} className={open ? "text-gray-40" : ""} />

            {open && <span>Progressão</span>}
          </div>

            <span>
              {openDropdown ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </span>
         
        </button>

        {openDropdown && (
          <div className=" mt-2 flex flex-col gap-2 ">
            {chords.map((chord) => (
              <NavLink
                key={chord.id}
                to={`/exercise/major/${chord.id}`}
                className={({ isActive }) =>
                  `flex items-center ${
                    open ? "gap-3 px-2" : "justify-center"
                  } p-2 rounded hover:bg-gray-200 ${
                    isActive ? "bg-gray-200 font-semibold text-[#1788c5]" : ""
                  }`
                }
              >
                <span className="font-semibold uppercase">{chord.id}</span>

                {open && <span>{chord.name}</span>}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
