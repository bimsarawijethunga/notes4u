import './App.css';
import React, {useState} from 'react'; 
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Home from './home';
import Signin from'./signin';
import {app, database} from './Firebase/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./img/bg.jpg";


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
  
  if(signedIn===false){
    return (
      <div style={{ backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh' }}>
      <Router>
        <Switch>
          <Route path = '/' component = {Signin}/>
          </Switch>
          </Router>
          </div>
          );
    }
    else{
      return (
        <div style={{ backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh' }}>
        <Router>
          <Switch>
            <Route path = '/' component = {Home}/>
            </Switch>
            </Router></div>
            );
    }
  }

export default App;
