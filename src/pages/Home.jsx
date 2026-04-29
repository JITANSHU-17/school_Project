import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";

export default function Home({ isLoggedIn,setShowRegister, setRedirectAfterLogin }) {
  return (
    <>
      <Hero
      isLoggedIn={isLoggedIn}
        setShowRegister={setShowRegister}
        setRedirectAfterLogin={setRedirectAfterLogin}
      />
      <Features />
      <HowItWorks />
    </>
  );
}
