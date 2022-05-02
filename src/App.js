import './sass/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

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