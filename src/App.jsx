import About from "./components/About";
import Beyond from "./components/Beyond";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <About /> */}
        <Experience />
        <Projects />
        <Skills />
        <Journey />
        <Beyond />
      </main>
      <Footer />
    </>
  );
}
