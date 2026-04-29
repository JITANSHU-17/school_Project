import { useState } from "react";

export default function RegisterModal({ onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      {/* MODAL BOX */}
      <div className="bg-[#1e293b] text-white p-6 rounded-2xl w-[90%] max-w-md border border-red-500 shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-[#0f172a] border border-gray-600 outline-none"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded-lg bg-[#0f172a] border border-gray-600 outline-none"
        />

        {/* BUTTON */}
        <button
        type="button"
          onClick={onLogin}
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold"
        >
          Register
        </button>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="w-full mt-3 text-gray-400 hover:text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
