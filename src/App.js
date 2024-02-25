import { BrowserRouter as Router } from "react-router-dom";
import {
  About,
  Footer,
  Header,
  Nav,
  Projects,
  Skills,
  FullName,
} from "./components";

import "./sass/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Header />
        <main>
          <FullName />
          <Skills />
          <About />
          <Projects />
          <Footer />
        </main>
      </Router>
    </div>
  );
}

export default App;
