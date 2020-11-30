import React from 'react';
import './Login.scss';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login: React.FC = () => {
    let history = useHistory();
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleLogin = () => {
        firebase.auth().signInWithPopup(provider).then((result: any) => {
            const { email, displayName, photoURL } = result.user;
            sessionStorage.setItem('name', displayName);
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('photo', photoURL);
            history.push('/');
        }).catch((error) => {
            console.log(error.message);
        });
    }

    return (
        <div className="login">
            <img src="https://img.icons8.com/color/48/000000/whatsapp--v6.png" alt="" />
            <h1>Login to Whatsapp</h1>
            <button onClick={handleLogin} className="login-btn">
                <img style={{ marginLeft: '3px' }} src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" />
                <span style={{ marginLeft: '35px' }}>Continue with Google</span>
            </button>
        </div>
    );
};

export default Login;