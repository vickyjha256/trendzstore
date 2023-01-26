import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import MenShoes from './Components/MenShoes';
import WomenShoes from './Components/WomenShoes';
import { men, CasualMen, FormalMen, EthnicMen } from './Components/MensItems';
import { women, CasualWomen, FormalWomen, EthnicWomen } from './Components/WomenItems';
import Message from './Components/Message';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className=''>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/men" element={<MenShoes shoetype={men} />} />
            <Route exact path="/women" element={<WomenShoes shoetype={women} />} />
            <Route exact path="/casualmen" element={<MenShoes shoetype={CasualMen} />} />
            <Route exact path="/formalmen" element={<MenShoes shoetype={FormalMen} />} />
            <Route exact path="/ethnicmen" element={<MenShoes shoetype={EthnicMen} />} />
            <Route exact path="/casualwomen" element={<WomenShoes shoetype={CasualWomen} />} />
            <Route exact path="/formalwomen" element={<WomenShoes shoetype={FormalWomen} />} />
            <Route exact path="/ethnicwomen" element={<WomenShoes shoetype={EthnicWomen} />} />
            <Route exact path="/message" element={<Message />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;