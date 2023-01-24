import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import ProjectCard from "./components/ProjectCard/ProjectCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <article>
        <About />
        <ProjectCard />
      </article>
    </div>
  );
}

export default App;
