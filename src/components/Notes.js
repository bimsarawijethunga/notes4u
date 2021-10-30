import { useState, useEffect } from "react";
import {app} from '../Firebase/firebase';
import { getDatabase, ref, onValue, query, orderByChild, equalTo } from "firebase/database";
import Note from "./Note";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Notes =()=> {
  
  
    const [notesList, setNotesList] = useState([]);

    const db = getDatabase();
    const auth = getAuth();
    const user = auth.currentUser;
      

      
    useEffect( () => {

      onAuthStateChanged(auth, user =>{

        let nuid = user.uid;

      const notesRef = query(ref(db, 'notes'), orderByChild('uid'), equalTo(nuid));

      onValue(notesRef, (snapshot) => {
        const note = snapshot.val();
        
        const notesList = [];
        for (let id in note) {
          notesList.push({ id, ...note[id] });
        }
        
        setNotesList(notesList);
      });
    });}, []);
  
    if (Array. isArray(notesList) && notesList. length){
          return(
        <div classname = "screen"><center>
          <h3>These are Your Notes</h3>
            {notesList
        ? notesList.map((note, index) => <Note note={note} key={index} />)
        : ""}
        </center></div>);}
        else{
          return(
          <div>
            <h3>Please Create Some Notes</h3>
            </div>);
        }
}

export default Notes;