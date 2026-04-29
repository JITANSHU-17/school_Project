export default function ReportCard({ report }) {
  const getPriorityColor = (priority) => {
    if (priority === "high") return "bg-red-500";
    if (priority === "medium") return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="bg-[#1e293b] p-5 rounded-xl shadow-lg hover:scale-[1.03] transition duration-300 text-white">
      <p className="mb-3 text-gray-300 text-sm">{report.description}</p>

      <p className="text-sm mb-2">
        📍 <span className="text-gray-400">{report.location}</span>
      </p>

      <div className="mt-3 flex justify-between items-center">
        <span
          className={`text-xs px-3 py-1 rounded-full font-semibold ${getPriorityColor(
            report.priority,
          )}`}
        >
          {report.priority.toUpperCase()}
        </span>

        <span className="text-xs text-gray-500">ID: {report._id}</span>
      </div>

      <p className="text-xs text-gray-400 mt-3">Status: {report.status}</p>
    </div>
  );
}
