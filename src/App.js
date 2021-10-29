import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Home from './home';
import Signin from'./signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/' component = {Signin}/>
      </Switch>
    </Router>
  );
}

export default App;
