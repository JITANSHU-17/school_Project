import Hero from "../components/hero";
import Features from "../components/features";
import HowItWorks from "../components/howItWorks";

export default function Home({ isLoggedIn, setShowAuth, setRedirectAfterLogin }) {
  return (
    <>
      <Hero
  isLoggedIn={isLoggedIn}
  setShowAuth={setShowAuth}
  setRedirectAfterLogin={setRedirectAfterLogin}
/>
      <Features />
      <HowItWorks />
    </>
  );
}
