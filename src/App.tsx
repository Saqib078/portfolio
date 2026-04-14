import { motion } from "framer-motion";
import About from "./component/About/About";
import Contact from "./component/contact/Contact";
import Experience from "./component/experience/Experience";
import Footer from "./component/Footer/Footer";
import Hero from "./component/hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Skills from "./component/skills/Skills";
import Work from "./component/Work/Work";
import SplashCursor from "./component/animation/SplashCursor";

function App() {
  return (
    <>
      <div>
        <SplashCursor/>
        <Navbar />
        <Hero />
        <div className="bg-image"></div>
        <motion.section
          id="About"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 4 }}
          viewport={{ once: false }}
        >
          <About />
        </motion.section>
        <motion.section
          id="Work"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 4 }}
          viewport={{ once: false }}
        >
          <Work />
        </motion.section>
        <motion.section
          id="Skills"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 4 }}
          viewport={{ once: false }}
        >
          <Skills />
        </motion.section>
        <motion.section
          id="Experience"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 4 }}
          viewport={{ once: false }}
        >
          <Experience />
        </motion.section>
        <motion.section
          id="Contact"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 4 }}
          viewport={{ once: false }}
        >
          <Contact />
        </motion.section>
        <Footer />
      </div>
    </>
  );
}

export default App;
