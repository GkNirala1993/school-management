import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Enquiry from './components/Enquiry';
import Home from './components/Home';
import Register from './components/Register';
import Transportation from './components/Transportation';
import Calculator from './components/Calculator';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={ Home} />
      <Route exact path ="/login" component={Login} />
      <Route exact path="/enquiry" component={Enquiry} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/transportation" component={Transportation} />
      <Route exact path ="/calc" component={Calculator} />
      
    </div>
    </Router>
  );
}

export default App;