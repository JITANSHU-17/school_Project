import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Anonymous Crime Reporting
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-6">
        Report incidents safely and anonymously without fear.
      </p>
      <Link
        to="/report"
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg"
      >
        Report Crime
      </Link>
    </div>
  );
}