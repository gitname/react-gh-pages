import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Simulator from "./pages/Simulator"
import Resources from "./pages/Resources"
import Identifier from "./pages/Identifier"
import Credits from "./pages/Credits"
import Home from "./Home.jsx"

function App() {
  return (
    <div>
      
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/react-gh-pages' element={<Home />} />
        <Route exact path='/simulator' element={<Simulator />} />
        <Route exact path='/resources' element={<Resources />}/>
        <Route exact path='/identifier' element={<Identifier />}/>
        <Route exact path='/credits' element={<Credits />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;