import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <article>
        <About />
        <h1>Projects I have made</h1>
        <ProjectCard />
      </article>
    </div>
  );
}

export default App;
