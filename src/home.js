import React from 'react';
import {app, database} from './Firebase/firebase';
import { getAuth, signOut } from "firebase/auth";
import NotesForm from './components/NotesForm';
import Button from 'react-bootstrap/Button';
import { getDatabase, ref, push, set } from "firebase/database";

const home = () => {

    
    const signout =()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    const createNote=obj=> {
        console.log(obj);
        const db = getDatabase();
        const postListRef = ref(db, 'notes');
        const newPostRef = push(postListRef);
        set(newPostRef, {
            obj
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
                    <NotesForm {...({createNote})}/>
                    </div>
                    </div>
    )
};

export default home;

