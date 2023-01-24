import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import "./App.scss";
import Header from "./components/Header/Header";
import Background from "./components/Background/Background";
import Projects from "./components/Projects/Projects";

const projects = [
  {
    title: "Github Finder",
    desc: "Application connected with Github API. Shows information like followers, followed, last 5 repositories etc. Has option to change language and theme",
    libs: ["Github API", "Context API", "Sass", "Axios"],
  },
];

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
