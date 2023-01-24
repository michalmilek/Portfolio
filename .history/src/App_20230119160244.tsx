import About from "./components/About/About";
import "./App.scss";
import Header from "./components/Header/Header";
import Background from "./components/Background/Background";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <Header />
      <Background />
      <About />
      <Projects />
      <Contact />
      <Sidebar />
    </div>
  );
}

export default App;
