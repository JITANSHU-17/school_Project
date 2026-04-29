import { useState } from "react";
import axios from "axios";

export default function OtpModal({ email, onClose, onSuccess }) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!otp) {
      alert("Please enter OTP ❗");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://crime-track-backend-5e98.onrender.com/api/auth/verify-signup-otp",
        { email, otp }
      );

      console.log("OTP verified:", res.data);

      alert("Registration successful 🎉");

      onSuccess(); // 🔥 login + close

    } catch (err) {
      console.error("OTP error:", err.response?.data || err.message);
      alert("Invalid OTP ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-[#1e293b] p-6 rounded-xl w-96 text-white border border-red-500 shadow-xl">

        <h2 className="text-xl font-bold mb-4 text-center">
          Verify Email
        </h2>

        <p className="text-sm text-gray-400 mb-4 text-center">
          OTP sent to <span className="text-white">{email}</span>
        </p>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded bg-gray-800 outline-none"
        />

        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full bg-red-600 py-2 rounded hover:bg-red-700 transition"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <button
          onClick={onClose}
          className="w-full mt-2 text-gray-400 hover:text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}