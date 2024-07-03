import React, { useEffect, useState } from 'react';
import { auth, provider } from './Config';
import Home from './Home';
import { signInWithPopup, signOut } from 'firebase/auth';
import './App.css';

function Signin() {
    const [value, setValue] = useState('');

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                setValue(data.user);
                localStorage.setItem('email', data.user.email);
                console.log(data.user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem('email');
                setValue('');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        let userEmail = localStorage.getItem('email');
        if (userEmail) {
            setValue(userEmail);
        }
    }, []);

    return (
      <div className='main'>
        <div className="signin-container">
            {value ? (
                <>
                    <h1 className="signin-title">Welcome: {value.displayName}</h1>
                    <div className="user-info">
                        <h1>Email : {value.email}</h1>
                        <img src={value.photoURL} alt="" />
                    </div>

                    <Home />

                    <div className="button-container">
                        <button className="signout-button" onClick={handleSignout}>
                            Sign Out
                        </button>
                    </div>
                </>
            ) : (
                <div className="button-container">
                    <button className="signin-button" onClick={handleClick}>
                        Sign In With Email
                    </button>
                </div>
            )}
        </div>
      </div>
    );
}

export default Signin;
