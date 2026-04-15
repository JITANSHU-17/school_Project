import React, { useState, useEffect,  useRef  } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const dropdownRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
  const handleClickOutside = (e) => {
    if (
      menuOpen &&
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target)
    ) {
      setMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [menuOpen]);
  
  return (
    <nav className="bg-red-500 text-white px-6 py-4 flex items-center justify-between">
      {/* LOGO */}
      <h1 className="text-2xl font-bold">CrimeTrackr</h1>

      {/* SEARCH */}
      <div className="flex flex-1 justify-center px-4">
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
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <div className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center">
          D
        </div>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* MOBILE DROPDOWN */}
      {/* OVERLAY */}
<div
  className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ${
    menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
></div>

{/* SIDEBAR */}
<div
  ref={sidebarRef}
  className={`fixed top-0 left-0 h-full w-40 bg-red-600/60 dark:bg-gray-900/80 backdrop-blur-md text-white z-50 transform transition-transform duration-300  ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  
  {/* HEADER */}
  <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
    <h2 className="text-xl font-bold">Menu</h2>
    <button onClick={() => setMenuOpen(false)}>✕</button>
  </div>

  {/* LINKS */}
  <div className="flex flex-col gap-4 p-4">
    <Link to="/" onClick={() => setMenuOpen(false)}>
      Home
    </Link>
    <Link to="/report" onClick={() => setMenuOpen(false)}>
      FIR
    </Link>
    <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
      Dashboard
    </Link>    <Link to="/about" onClick={() => setMenuOpen(false)}>
      About
    </Link>  </div>
</div>
    </nav>
  );
};

export default Navbar;
