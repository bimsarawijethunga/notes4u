import { React, useState, useEffect } from "react";
import {app} from './Firebase/firebase';
import { getAuth, signOut } from "firebase/auth";
import NotesForm from './components/NotesForm';
import Notes from './components/Notes';
import Button from 'react-bootstrap/Button';
import { getDatabase, ref, push, set, onValue} from "firebase/database";
import { render } from '@testing-library/react';


const home =()=> {
    
    const signout=()=> {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    const createNote =(obj)=>  {
        let x = Math.random();
        const auth = getAuth();
        const user = auth.currentUser;
        const uid = user.uid;
        const db = getDatabase();
        const postListRef = ref(db, 'notes');
        const newPostRef = push(postListRef);
        set(newPostRef, {
            title: obj.title,
            note: obj.note,
            uid: uid,
            kid: x,
        });
    }
        
        return(
        <div>
            <h1 className="logotext" style={{
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
                <text style={{marginRight:150}}>
                    <NotesForm createNote= {createNote}/>
                    </text>
                    <text>
                    <Notes /></text>
                    </div>
                    </div>
    );
                }

export default home;

