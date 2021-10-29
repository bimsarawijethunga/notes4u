import React, { useState, useEffect } from "react";
import {app, database} from '../Firebase/firebase';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, push, set } from "firebase/database";

const NotesForm =(props)=>{

    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;


    const initialFieldValues = {
        title: '',
        note: '',
        id: uid,
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
        e.preventDefault();
        props.createNote(values);
    }


    return(
    <div>
        <h3>Create New Note</h3>
        <form onSubmit = {handleFormSubmit}>
            <label>Title<br/>
            <input type = 'text' name = "title" value={values.title} onChange={handleInputChange}></input></label><br/>
            <label>Note<br/>
            <textarea name = "note" value={values.note} onChange={handleInputChange}></textarea></label><br/>
            <input type = 'submit' value ='Save Note'/>
            </form>
    </div>
    );
}

export default NotesForm;