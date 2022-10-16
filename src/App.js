
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componenets/Header';
import Home from './componenets/Home';
import Contact from './componenets/Contact';
import Pricing from './componenets/Pricing';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/pricing' element={<Pricing />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
