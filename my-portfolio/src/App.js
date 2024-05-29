import Navbar from "./components/Navbar/NavBar";
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Works from './components/Works/works';
import Skills from'./components/Skills/skills';
import Contact from'./components/Contact/contact';
import Footer from "./components/Footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Works/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
