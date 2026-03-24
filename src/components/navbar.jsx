import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <nav className="bg-red-500 text-white px-6 py-4 flex items-center justify-between">
      {/* LOGO */}
      <h1 className="text-2xl font-bold">CrimeTrackr</h1>

      {/* SEARCH */}
      <div className="hidden md:flex flex-1 justify-center px-4">
        <input
          type="text"
          placeholder="Search Crime Files..."
          className="w-full max-w-md px-4 py-2 rounded-lg text-black bg-amber-50"
        />
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/report" className="hover:underline">
          FIR
        </Link>
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>

        <div
          onClick={toggleTheme}
          className={`w-14 h-7 flex items-center rounded-full px-1 cursor-pointer transition ${
            dark ? "bg-gray-800" : "bg-yellow-400"
          }`}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transform transition ${
              dark ? "translate-x-7" : ""
            }`}
          >
            {dark ? "🌙" : "🔆"}
          </div>
        </div>

        <div className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center">
          D
        </div>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-red-600 p-4 rounded-lg flex flex-col gap-3 md:hidden">
          <Link to="/">Home</Link>
          <Link to="/report">FIR</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
