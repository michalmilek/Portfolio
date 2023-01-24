import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <article className="article">
        <About />
        <section className="section">
          <h1 className="section_h1">Projects I have made</h1>
          <ProjectCard />
        </section>
      </article>
    </div>
  );
}

export default App;
