import About from "./component/About/About";
import Contact from "./component/contact/Contact";
import Experience from "./component/experience/Experience";
import Footer from "./component/Footer/Footer";
import Hero from "./component/hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Skills from "./component/skills/Skills";
import Work from "./component/Work/Work";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Skills/>
        <Experience/>
        <Contact/>
        <Footer />
      </div>
    </>
  );
}

export default App;
