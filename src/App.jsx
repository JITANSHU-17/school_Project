import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import RegisterModal from "./components/RegisterModal";
import { useNavigate } from "react-router-dom";

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [redirectAfterLogin, setRedirectAfterLogin] = useState("/");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        setShowRegister={setShowRegister}
        setRedirectAfterLogin={setRedirectAfterLogin}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              setShowRegister={setShowRegister}
              setRedirectAfterLogin={setRedirectAfterLogin}
            />
          }
        />
        <Route
          path="/report"
          element={
            isLoggedIn ? (
              <Report />
            ) : (
              <Home
                isLoggedIn={isLoggedIn}
                setShowRegister={setShowRegister}
                setRedirectAfterLogin={setRedirectAfterLogin}
              />
            )
          }
        />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard searchQuery={searchQuery} />
            ) : (
              <Home
                isLoggedIn={isLoggedIn}
                setShowRegister={setShowRegister}
                setRedirectAfterLogin={setRedirectAfterLogin}
              />
            )
          }
        />
        <Route
          path="/about"
          element={
            isLoggedIn ? (
              <About />
            ) : (
              <Home
                isLoggedIn={isLoggedIn}
                setShowRegister={setShowRegister}
                setRedirectAfterLogin={setRedirectAfterLogin}
              />
            )
          }
        />
      </Routes>
      {showRegister && (
        <RegisterModal
          onClose={() => setShowRegister(false)}
          onLogin={() => {
            setIsLoggedIn(true);
            setShowRegister(false);
            navigate(redirectAfterLogin); // ✅ FIX
          }}
        />
      )}
      <Footer />
    </>
  );
}
