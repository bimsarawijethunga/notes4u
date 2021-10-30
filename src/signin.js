import React from 'react';
import {app} from './Firebase/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {Card, Button} from 'react-bootstrap';

const signin = () =>{

    const SignInWithFirebase =()=>{
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    return(
        <div className = 'screen'>
            <text className="logotext"><center><h1 style = {{fontSize:80, color: '#fca400'}}>Notes4U</h1>{'\n'}
            <h2 style = {{marginTop:'10%', marginBottom:'10%', color:'white'}}>Please Sign In with Your Google Account</h2>{'\n'}
            <Button size="lg" variant="warning" active onClick = {SignInWithFirebase}>Sign In</Button></center></text>
        </div>
    )
}

export default signin;