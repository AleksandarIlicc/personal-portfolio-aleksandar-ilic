import "./sass/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { About, Footer, Header, Nav, Projects, Skills } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Header />
        <main>
          <About />
          <Skills />
          <Projects />
          <Footer />
        </main>
      </Router>
    </div>
  );
}

export default App;
