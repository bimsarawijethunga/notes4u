import React from 'react';
import {app} from './Firebase/firebase';
import { getAuth, signOut } from "firebase/auth";
import NotesForm from './components/NotesForm';
import Button from 'react-bootstrap/Button';

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
            <h1 style={{
                    fontSize: 50,
                    position: "relative",
                    top: 40,
                    left: 40,
                    color: '#fca400'
                    }}>Notes4U</h1>
                    <Button style={{
                    fontSize: 20,
                    position: "relative",
                    top: 40,
                    left: 40,
                    marginTop: 20
                    }} variant="danger" onClick = {signout}>Sign Out</Button>       
            <div className = 'screen'>
                    <NotesForm/>
                    </div>
                    </div>
    )
};

export default home;

