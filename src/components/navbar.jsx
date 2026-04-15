import React, { useState, useEffect,  useRef  } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const dropdownRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const sidebarRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
      if (
        searchOpen &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, searchOpen]);
  
  return (
    <nav className="bg-red-500 text-white px-6 py-4 flex items-center justify-between">
      {/* LOGO */}
      <h1 className="text-2xl font-bold">CrimeTrackr</h1>

      {/* DESKTOP NAV LINKS */}
      <div className="hidden md:flex flex-1 items-center justify-end gap-6">
        <div className="flex items-center gap-3">
         

          <div ref={searchRef} className="flex items-center gap-2 transition-all duration-300">
            <div className={`overflow-hidden transition-all duration-300 ${searchOpen ? 'max-w-[18rem]' : 'max-w-0'}`}>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Search Crime Files..."
                className="h-10 w-full rounded-l-lg border border-gray-300 bg-white px-3 text-black outline-none transition-all duration-300"
              />
            </div>
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              className="rounded-lg bg-amber-50 px-4 py-2 text-black font-medium hover:bg-amber-100 transition"
            >
              🔎 Search
            </button>
            {searchOpen && (
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="rounded-lg bg-gray-200 px-3 py-2 text-black hover:bg-gray-300 transition"
              >
                ✕
              </button>
            )}
          </div>
        </div>
        <Link to="/" className="hover:underline">
          Home
        </Link>
         <Link to="/about" className="hover:underline">
          About
        </Link>

        
        <Link to="/report" className="hover:underline">
          FIR
        </Link>
       
        <Link to="/dashboard" className="hover:underline">
          Dashboard
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
