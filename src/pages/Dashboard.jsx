// import { useEffect, useState } from 'react'
// import axios from 'axios'

// export default function Dashboard() {
//   const [reports, setReports] = useState([])

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/reports')
//       .then(res => setReports(res.data))
//   }, [])

//   return (
//     <div className="container">
//       <h2>Authority Dashboard</h2>
//       {reports.map(r => (
//         <div key={r._id} className="card">
//           <p>{r.description}</p>
//           <p><b>Location:</b> {r.location}</p>
//           <p><b>Priority:</b> {r.priority}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [reports, setReports] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/reports")
  //     .then((res) => setReports(res.data));
  // }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/api/reports").then((res) => {
      console.log(res.data); // 👈 ADD THIS
      setReports(res.data);
    });
  }, []);

  const getPriorityColor = (priority) => {
    if (priority === "high") return "bg-red-500";
    if (priority === "medium") return "bg-yellow-500";
    return "bg-green-500";
  };
  // if (reports.length === 0) {
  //   return (
  //     <div className="text-center mt-20 text-gray-400">No reports yet 🚫</div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Authority Dashboard
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((r) => (
          <div
            key={r._id}
            className="bg-[#1e293b] p-4 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <p className="mb-3 text-gray-300">{r.description}</p>

            <p className="text-sm">
              📍 <span className="text-gray-400">{r.location}</span>
            </p>

            <div className="mt-3 flex justify-between items-center">
              <span
                className={`text-sm px-3 py-1 rounded-full ${getPriorityColor(
                  r.priority,
                )}`}
              >
                {r.priority.toUpperCase()}
              </span>

              <span className="text-xs text-gray-400">
                ID: {r._id.slice(-5)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
