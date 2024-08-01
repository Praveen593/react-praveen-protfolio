import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Skills from './components/Skills'
import Projects from './components/Projects';
import Contact from './components/contact'
function App() {
  return (
    <div className="App reset">
     <Header/>
     <Body/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     
    </div>
  );
}

export default App;
