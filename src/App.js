import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <About />
      <TechStack />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
