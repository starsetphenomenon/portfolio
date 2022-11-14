import './App.scss';
import Main from './screens/Main/Main';
import About from './screens/About/About';
import Menu from './components/Menu/Menu';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
