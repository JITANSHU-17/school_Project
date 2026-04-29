import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = ({
  isLoggedIn,
  setShowAuth,
  setRedirectAfterLogin,
  searchQuery,
  setSearchQuery,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
        <h1 className="text-2xl font-bold">CrimeTrackr</h1>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex flex-1 items-center justify-end gap-6">
        {/* 🔍 SEARCH BAR */}
        {isLoggedIn && (
          <div ref={searchRef} className="flex items-center gap-2">
            {/* INPUT (HIDDEN → EXPAND) */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                searchOpen ? "max-w-[200px]" : "max-w-0"
              }`}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Crime Files..."
                className="h-10 w-full px-3 rounded-l-lg text-black outline-none bg-white"
              />
            </div>

            {/* SEARCH BUTTON */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="bg-amber-50 text-black px-4 py-2 rounded-lg hover:bg-amber-100"
            >
              🔎 Search
            </button>

            {/* CLOSE BUTTON */}
            {searchOpen && (
              <button
                onClick={() => setSearchOpen(false)}
                className="bg-gray-200 px-3 py-2 rounded-lg text-black"
              >
                ✕
              </button>
            )}
          </div>
        )}

        {/* LINKS */}
        {isLoggedIn ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/report">FIR</Link>
            <Link to="/dashboard">Dashboard</Link>

            <div className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center">
              D
            </div>
          </>
        ) : (
          <button
            onClick={() => {
              setRedirectAfterLogin("/");
              setShowAuth(true)
            }}
            className="bg-white text-black px-4 py-2 rounded-lg"
          >
            Register
          </button>
        )}
      </div>

      {/* MOBILE BUTTON */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* MOBILE SIDEBAR */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-40 bg-red-600/60 dark:bg-gray-900/80 backdrop-blur-md text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4 border-b">
          <h2>Menu</h2>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <div className="p-4 flex flex-col gap-4">
          {/* MObile Search Section */}
          {isLoggedIn && (
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search..."
              className="px-3 py-2 rounded-lg text-black bg-white"
            />
          )}

          {isLoggedIn ? (
            <>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/report" onClick={() => setMenuOpen(false)}>
                FIR
              </Link>
              <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                Dashboard
              </Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                setRedirectAfterLogin("/");
                setShowAuth(true);
                setMenuOpen(false);
              }}
              className="bg-white text-black px-4 py-2 rounded-lg"
            >
              Register
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
