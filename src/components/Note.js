import React, { useState, useEffect } from "react";
import { getDatabase, ref, query, orderByChild, equalTo } from "firebase/database";
import { Button, Card } from 'react-bootstrap';
import {app} from '../Firebase/firebase';

export default function Note({ note }) {

    const db = getDatabase();
  
    const deleteNote = () => {
    };

    const handleChangetitle = (e) => {
      e.preventDefault();
    };

    const handleChangenote = (e) => {
        e.preventDefault();
      };


    return (
        <div style={{marginBottom:20}}>
          <Card border="warning" style={{ width: '100%' }}>
        <Card.Header><center><text style={{marginRight:300}}>{note.title}</text>
        <Button variant= "danger" onClick={deleteNote(note.key)}>X</Button></center>
        </Card.Header>
        <Card.Body>
            <center>{note.note}<br/>
            </center>
        </Card.Body>
  </Card>
  </div>
    );
  }