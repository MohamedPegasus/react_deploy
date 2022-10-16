
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componenets/Header';
import Home from './componenets/Home';
import Contact from './componenets/Contact';
import Pricing from './componenets/Pricing';
import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
      <Header />
      <Switch>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/pricing' element={<Pricing />}></Route>
      </Switch>
      </Router>
    
  );
}

export default App;
