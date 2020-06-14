import React, {useState, useEffect, createContext} from 'react';
import {auth} from "../firebase/firebase.utils";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => auth.onAuthStateChanged(user => setCurrentUser(user)), [])

    return (
        <UserContext.Provider value={currentUser}>
            {props.children}
        </UserContext.Provider>
    )
};