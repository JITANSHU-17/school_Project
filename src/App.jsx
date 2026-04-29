import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useState } from "react";
import AuthModal from "./components/AuthModal";
import OtpModal from "./components/OtpModal";

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [redirectAfterLogin, setRedirectAfterLogin] = useState("/");
  const [searchQuery, setSearchQuery] = useState("");

  // 🔥 AUTH MODAL STATE
  const [showAuth, setShowAuth] = useState(false);

  // 🔥 OTP FLOW STATE
  const [showOtp, setShowOtp] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        setRedirectAfterLogin={setRedirectAfterLogin}
        setShowAuth={setShowAuth}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              setShowAuth={setShowAuth}
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
                setShowAuth={setShowAuth}
                setRedirectAfterLogin={setRedirectAfterLogin}
              />
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard searchQuery={searchQuery} />
            ) : (
              <Home
                isLoggedIn={isLoggedIn}
                setShowAuth={setShowAuth}
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
                setShowAuth={setShowAuth}
                setRedirectAfterLogin={setRedirectAfterLogin}
              />
            )
          }
        />
      </Routes>

      {/* 🔐 AUTH MODAL */}
      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setShowAuth(false);
            navigate(redirectAfterLogin);
          }}
          onSignupSuccess={(email) => {
            setShowAuth(false);
            setUserEmail(email);
            setShowOtp(true); // 👉 OTP OPEN
          }}
        />
      )}

      {/* 🔑 OTP MODAL */}
      {showOtp && (
        <OtpModal
          email={userEmail}
          onClose={() => setShowOtp(false)}
          onSuccess={() => {
            setShowOtp(false);
            setIsLoggedIn(true);
            navigate(redirectAfterLogin);
          }}
        />
      )}

      <Footer />
    </>
  );
}