import About from "./components/About/About";
import "./App.scss";
import Header from "./components/Header/Header";
import Background from "./components/Background/Background";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
