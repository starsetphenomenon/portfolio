import './App.scss';
import Main from './screens/Main/Main';
import About from './screens/About/About';
import Menu from './components/Menu/Menu';
import { Routes, Route } from "react-router-dom";
import Cursor from './components/Cursor/Cursor';
import Works from './screens/works/Works';
import Contact from './screens/Contact/Contact';
import { HelmetProvider } from "react-helmet-async";
import { ParallaxProvider } from 'react-scroll-parallax';



function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <ParallaxProvider scrollAxis="vertical">
          <Cursor />
          <Menu />
          <Routes>
            <Route path="/" index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="works" element={<Works />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </ParallaxProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
