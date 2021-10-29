import React from 'react';
import {app} from './Firebase/firebase';
import { getAuth, signOut } from "firebase/auth";

const home = () => {

    const signout =()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return(
    <div>
        <h1>Home</h1>
        <button onClick = {signout}>Sign Out</button>
        </div>
    )
};

export default home;

