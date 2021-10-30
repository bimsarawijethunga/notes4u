import React, { useState, useEffect } from "react";
import {app} from '../Firebase/firebase';
import { Button, Card } from 'react-bootstrap';

const NotesForm =(props)=>{


    const initialFieldValues = {
        title: '',
        note: '',
    }

    var [values, setValues] = useState(initialFieldValues);

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFormSubmit = e => {
        alert("Note Saved");
        e.preventDefault();
        props.createNote(values);
    }


    return(
    <div>
        <Card border="warning" style={{ width: '100%' }}>
    <Card.Header><center><h4>Create New Note</h4></center></Card.Header>
    <Card.Body>
        <center>
    <form onSubmit = {handleFormSubmit}>
            <label>Title<br/>
            <input style={{width:300}} type = 'text' name = "title" value={values.title} onChange={handleInputChange}></input></label><br/>
            <label>Note<br/>
            <textarea style={{width:300}} name = "note" value={values.note} onChange={handleInputChange}></textarea></label><br/>
            <Button variant="warning" onClick = {handleFormSubmit}>Save Note</Button>
            </form></center>
    </Card.Body>
  </Card>
        
        
    </div>
    );
}

export default NotesForm;