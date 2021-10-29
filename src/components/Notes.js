import React, { useState, useEffect } from "react";
import {app, database} from '../Firebase/firebase';
import { getDatabase, ref, push, set } from "firebase/database";

const Notes =(props)=>{

    return(
        <div className = 'screen'>
            <h3>These Are Your Notes</h3>
        </div>
    );
}

export default Notes;