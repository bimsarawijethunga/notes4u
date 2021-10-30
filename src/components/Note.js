import React, { useState, useEffect } from "react";
import { getDatabase, ref, query, orderByChild, equalTo, remove, onValue} from "firebase/database";
import { Button, Card } from 'react-bootstrap';
import Notes from "./Notes";


export default function Note({ note }) {

    const db = getDatabase();
    let x = note.kid;
  
    const deleteNote = () => {
        const dnote =query(ref(db, 'notes'), orderByChild('kid'), equalTo(x));
        onValue(dnote, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const cnote = ref(db, 'notes/'+childKey);
                remove(cnote);
              // ...
            });
          }
        );

    };

    const handleChangetitle = (e) => {
      e.preventDefault();
    };

    const handleChangenote = (e) => {
        e.preventDefault();
      };


    return (
        <div style={{marginBottom:20}}>
          <Card bg="warning" border="dark" style={{ width: '100%' }}>
        <Card.Header><center><strong><text style={{marginRight:300}}>{note.title}</text></strong>
        <Button variant= "danger" onClick={deleteNote}>X</Button></center>
        </Card.Header>
        <Card.Body>
            <center>{note.note}<br/>
            </center>
        </Card.Body>
  </Card>
  </div>
    );
  }