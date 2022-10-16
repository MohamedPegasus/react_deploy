
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componenets/Header';
import Home from './componenets/Home';
import Contact from './componenets/Contact';
import Pricing from './componenets/Pricing';
import {BrowsrRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowsrRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/' element={<Contact />}></Route>
        <Route exact path='/' element={<Pricing />}></Route>
      </Routes>
      </BrowsrRouter>
    </div>
  );
}

export default App;
