import React, { useState } from "react";
import { getAuth } from "firebase/auth";

const NotesForm =()=>{

    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
        const uid = user.uid;
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Note ${title}`);
        console.log(user.uid);
    }


    return(
    <div>
        <h3>Create New Note</h3>
        <form onSubmit={handleSubmit}>
            <label>Title<br/>
            <input type = 'text' value={title} onChange={e => setTitle(e.target.value)}></input></label><br/>
            <label>Note</label><br/>
            <textarea value={note} onChange={e => setNote(e.target.value)}></textarea><br/>
            <input type="submit" value="Save Note" />
        </form>
    </div>
    );
}

export default NotesForm;