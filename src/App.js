import './App.scss';
import Main from './screens/Main/Main';
import About from './screens/About/About';
import Menu from './components/Menu/Menu';
import { Routes, Route } from "react-router-dom";
import Cursor from './components/Cursor/Cursor';
import Works from './screens/works/Works';

function App() {
  return (
    <div className="App">
      <Cursor />
      <Menu />
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
      </Routes>
    </div>
  );
}

export default App;
