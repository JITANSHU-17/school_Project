import React from 'react'
import { Link } from "react-router-dom";

function footer() {
  return (
    <footer className="bg-[#020617] text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {/* LEFT - PROJECT INFO */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            CrimeTrackr
          </h2>
          <p className="text-sm">
            Anonymous crime reporting platform ensuring privacy and safety.
          </p>
        </div>
        {/* CENTER - LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Quick Links
          </h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/report" className="hover:text-white">Report</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>
        {/* RIGHT - EXTRA INFO */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            About
          </h3>
          <p className="text-sm">
            Built using MERN stack with focus on anonymity, security and usability.
          </p>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} CrimeTrackr. All rights reserved.
      </div>
    </footer>
  );
}

export default footer
