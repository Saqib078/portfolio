import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import Hero from "./component/hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Work from "./component/Work/Work";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Work />
        <About />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
