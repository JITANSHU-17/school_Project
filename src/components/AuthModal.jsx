import { useState } from "react";
import axios from "axios";

export default function AuthModal({
  onClose,
  onLoginSuccess,
  onSignupSuccess, // 🔥 NEW PROP
}) {
  const [mode, setMode] = useState("login"); // login | signup | forgot

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // 🔥 UX improvement

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔐 LOGIN
  const handleLogin = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        "https://crime-track-backend-5e98.onrender.com/api/auth/user-login",
        form
      );

      console.log("Login success:", res.data);
      alert("Login successful ✅");

      onLoginSuccess();
    } catch (err) {
      console.error(err);
      alert("Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  // 📝 SIGNUP (🔥 FIXED OTP FLOW)
  const handleSignup = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
  "https://crime-track-backend-5e98.onrender.com/api/auth/user-signup",
  form
);

if (res.status === 200) {
  alert("OTP sent to your email 📩");
  onSignupSuccess(form.email);
}

    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      alert("Signup failed ❌");
    } finally {
      setLoading(false);
    }
  };

  // 🔁 FORGOT PASSWORD
  const handleForgot = async () => {
    try {
      setLoading(true);

      await axios.post(
        "https://crime-track-backend-5e98.onrender.com/api/auth/forgot-password",
        { email: form.email }
      );

      alert("Reset link sent to email 📩");
      setMode("login");
    } catch (err) {
      console.error(err);
      alert("Error sending reset link ❌");
    } finally {
      setLoading(false);
    }
  };

  // 🔘 BUTTON HANDLER
  const handleSubmit = () => {


    if (mode === "login") handleLogin();
    else if (mode === "signup") handleSignup();
    else handleForgot();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-[#1e293b] text-white p-6 rounded-xl w-96 border border-red-500 shadow-xl">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center mb-4">
          {mode === "login" && "Login"}
          {mode === "signup" && "Sign Up"}
          {mode === "forgot" && "Forgot Password"}
        </h2>

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2 rounded bg-gray-800 outline-none"
        />

        {/* PASSWORD */}
        {mode !== "forgot" && (
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 rounded bg-gray-800 outline-none"
          />
        )}

        {/* MAIN BUTTON */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-red-600 py-2 rounded mb-3 hover:bg-red-700 transition"
        >
          {loading
            ? "Processing..."
            : mode === "login"
            ? "Login"
            : mode === "signup"
            ? "Sign Up"
            : "Send Reset Link"}
        </button>

        {/* SWITCH LINKS */}
        <div className="text-sm text-center text-gray-400 space-y-2">

          {mode === "login" && (
            <>
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => setMode("signup")}
                  className="text-blue-400 cursor-pointer"
                >
                  Sign Up
                </span>
              </p>

              <p>
                <span
                  onClick={() => setMode("forgot")}
                  className="text-yellow-400 cursor-pointer"
                >
                  Forgot Password?
                </span>
              </p>
            </>
          )}

          {mode === "signup" && (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setMode("login")}
                className="text-blue-400 cursor-pointer"
              >
                Login
              </span>
            </p>
          )}

          {mode === "forgot" && (
            <p>
              Back to{" "}
              <span
                onClick={() => setMode("login")}
                className="text-blue-400 cursor-pointer"
              >
                Login
              </span>
            </p>
          )}
        </div>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="w-full mt-4 text-gray-400 hover:text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}