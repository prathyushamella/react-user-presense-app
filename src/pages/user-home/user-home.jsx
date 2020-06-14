import React, {useContext} from 'react';
import './user-home.scss'
import {UserContext} from "../../contexts/UserContext";
import {auth} from '../../firebase/firebase.utils'
const UserHome = () => {
    const user = useContext(UserContext)
    const {displayName, email} = user
    return (
        <div className={'user-home'}>
            <button className={'primary-btn'} onClick={()=> auth.signOut()}>
                SIGN OUT
            </button>
            <div className="title">Welcome, {displayName}</div>
            <div className="sub">Email: {email}</div>
        </div>
    );
};

export default UserHome;