import { useState } from "react";
import axios from "axios";

export default function Report() {
  const [form, setForm] = useState({
    description: "",
    location: "",
    priority: "low",
    media: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, media: file });

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = `${pos.coords.latitude}, ${pos.coords.longitude}`;
      setForm({ ...form, location: coords });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));

    try {
      await axios.post("https://crime-track-backend-5e98.onrender.com/api/report/create", data);
      alert("Report submitted anonymously ✅");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0f172a] text-white px-4">
      <div className="w-full max-w-2xl bg-[#1e293b] p-8 rounded-2xl shadow-2xl border border-red-700">
        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide">
          Submit Crime Report
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* DESCRIPTION */}
          <textarea
            name="description"
            placeholder="Describe the incident..."
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />

          {/* LOCATION */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              className="flex-1 p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />

            {/* MODERN MAP BUTTON */}
            <div className="relative group">
              <button
                type="button"
                onClick={getLocation}
                className="flex items-center justify-center w-12 h-12 rounded-full 
                bg-gradient-to-r from-red-500 to-red-600 
                hover:from-red-600 hover:to-red-700 
                shadow-lg shadow-red-500/30 
                transition-all duration-300 
                hover:scale-110 active:scale-95"
              >
                <img
                  src="wired-outline-18-location-pin-hover-jump.svg"
                  alt="location"
                  className="w-6 h-6"
                />
              </button>

              {/* Tooltip */}
              <span
                className="absolute -top-10 left-1/2 -translate-x-1/2 
              bg-gray-900 text-white text-xs px-2 py-1 rounded 
              opacity-0 group-hover:opacity-100 transition"
              >
                Use current location
              </span>
            </div>
          </div>

          {/* PRIORITY */}
          <select
            name="priority"
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>

          {/* FILE UPLOAD */}
          <input
            type="file"
            onChange={handleFile}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer"
          />

          {/* PREVIEW */}
          {preview && (
            <div>
              <p className="text-sm mb-2 text-gray-400">Preview:</p>
              <img
                src={preview}
                alt="preview"
                className="w-full h-52 object-cover rounded-lg border border-gray-700"
              />
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg text-lg font-semibold tracking-wide transition transform hover:scale-[1.02] shadow-lg shadow-red-600/30"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}
