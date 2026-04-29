import { useState } from "react";
import ReportCard from "../components/ReportCard";

export default function Dashboard({ searchQuery }) {
  const [reports] = useState([
    {
      _id: "1",
      description: "Mobile theft near market area",
      location: "Bhubaneswar",
      priority: "high",
      status: "Pending",
    },
    {
      _id: "2",
      description: "Bike accident on highway",
      location: "Cuttack",
      priority: "medium",
      status: "Resolved",
    },
    {
      _id: "3",
      description: "Chain snatching case reported",
      location: "Puri",
      priority: "low",
      status: "Under Investigation",
    },
  ]);

  // ✅ FILTER LOGIC (JSX ke bahar)
  const filteredReports = reports.filter((r) => {
    const q = searchQuery?.toLowerCase() || "";

    return (
      r.description.toLowerCase().includes(q) ||
      r.location.toLowerCase().includes(q) ||
      r.priority.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Authority Dashboard
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredReports.length > 0 ? (
          filteredReports.map((r) => (
            <ReportCard key={r._id} report={r} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">
            No matching reports found 🔍
          </p>
        )}
      </div>
    </div>
  );
}