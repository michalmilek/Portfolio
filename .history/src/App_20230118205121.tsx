import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import "./App.scss";
import Header from "./components/Header/Header";
import Background from "./components/Background/Background";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <About />
      <Projects />
    </div>
  );
}

export default App;
