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
      setPreview(URL.createObjectURL(file)); // 🔥 preview
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
      await axios.post("http://localhost:5000/api/report", data);
      alert("Report submitted anonymously ✅");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0f172a] text-white px-4">
      <div className="w-full max-w-2xl bg-[#1e293b] p-6 rounded-xl shadow-lg">

        <h2 className="text-2xl font-bold mb-4 text-center">
          Submit Crime Report
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* DESCRIPTION */}
          <textarea
            name="description"
            placeholder="Describe the incident..."
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-800"
          />

          {/* LOCATION */}
          <div className="flex gap-2">
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              className="flex-1 p-3 rounded bg-gray-800"
            />
            <button
              type="button"
              onClick={getLocation}
              className="bg-blue-600 px-3 rounded"
            >
              📍
            </button>
          </div>

          {/* PRIORITY */}
          <select
            name="priority"
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>

          {/* FILE UPLOAD */}
          <input
            type="file"
            onChange={handleFile}
            className="w-full p-2 bg-gray-800 rounded"
          />

          {/* PREVIEW */}
          {preview && (
            <div>
              <p className="text-sm mb-1">Preview:</p>
              <img
                src={preview}
                alt="preview"
                className="w-full h-48 object-cover rounded"
              />
            </div>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-lg"
          >
            Submit Report
          </button>

        </form>
      </div>
    </div>
  );
}