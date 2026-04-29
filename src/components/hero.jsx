import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Hero({ isLoggedIn, setShowAuth, setRedirectAfterLogin }){
  const navigate = useNavigate();
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://pix4free.org/assets/library/2021-01-21/originals/crime.jpg')",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Netflix bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Anonymous Crime <br /> Reporting
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Report incidents safely and anonymously without fear.
        </p>

        <button
          onClick={() => {
            if (!isLoggedIn) {
              setRedirectAfterLogin("/report"); // after register → go report page
              setShowAuth(true);
            } else {
              navigate("/report");
            }
          }}
          className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-md text-lg font-semibold transition"
        >
          Report Crime
        </button>
      </div>
    </div>
  );
}
