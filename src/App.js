import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./componnents/banner/banner";
import About from "./componnents/about/about";
import Services from "./componnents/services/services";
function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Services />
      <div className="projects">
        <h1>Projects</h1>
      </div>
    </div>
  );
}

export default App;
