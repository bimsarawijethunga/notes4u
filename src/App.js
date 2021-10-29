import './App.css';
import React, {useState} from 'react'; 
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Home from './home';
import Signin from'./signin';
import {app} from './Firebase/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {

  const [signedIn, setSignedIn] = useState(true);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      return setSignedIn(true);
      // ...
    } else {
      // User is signed out
      return setSignedIn(false);
      // ...
    }
  });
  
  if(signedIn===true){
    return (
      <Router>
        <Switch>
          <Route path = '/' component = {Home}/>
          </Switch>
          </Router>
          );
    }
    else{
      return (
        <Router>
          <Switch>
            <Route path = '/' component = {Signin}/>
            </Switch>
            </Router>
            );
    }
  }

export default App;
