import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <article>
        <About />
      </article>
    </div>
  );
}

export default App;
