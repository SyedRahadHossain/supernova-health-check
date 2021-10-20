import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import initializeAuthentication from '../../Firebase/firebase.init';
import login from "../../images/login.jpg"

initializeAuthentication();


const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();


    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        // console.log(email, password);

        if (password.length < 6) {
            setError("Password must be at least 6 characters long")
            return;
        }

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("Password must contain two upper case");
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
                window.location.reload();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
    }

    return (
        <div className='container'>
            <div>
                <img className="img-fluid mt-3" src={login} alt="" />
            </div>
            <div className="row border shadow rounded my-4 mx-2">
                {/* social login */}
                <div className="col-md-5 border-end border-2 border-primary ">
                    <h3 className="my-4 text-primary">Login With Social Network</h3>
                    <button onClick={signInUsingGoogle} className="btn btn-danger my-3">
                        <i class="fab fa-google"></i> Login with Google</button>
                    <br />
                    <button  className="btn btn-primary my-3">
                        <i class="fab fa-facebook-f"></i> Login with Facebook</button>
                </div>
                {/* email login */}
                <div className="col-md-7 border-start border-primary ">
                    <div className="m-3">
                        <form onSubmit={handleRegistration}>
                            <h3 className="text-primary text-center">Please {isLogin ? 'Login' : 'Register'}</h3>

                            {!isLogin && <div className="row mb-3">
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input onBlur={handleNameChange} type="text" className="form-control" id="inputName" placeholder="Your Name" required />
                                </div>
                            </div>}
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3"
                                        placeholder="Your Email "
                                        required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3"
                                        placeholder="Your password"
                                        required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-10 offset-sm-2 d-flex justify-content-center">
                                    <div className="form-check">
                                        <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Already Registered?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3 text-danger">{error}</div>
                            <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
                            <br /> <br />
                            <button type="button" onClick={handleResetPassword} className="btn btn-danger btn-sm">Reset Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;