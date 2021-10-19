import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange, handleResetPassword, error } = useAuth();

    const [isLogin, setIsLogin] = useState(false);

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }


    return (
        <div className='container'>
            <h3 className="my-4 text-primary">Login via Google</h3>
            <button onClick={signInUsingGoogle} className="btn btn-primary my-3">Google Sign In</button>
            <br />


            -----------or----------


            <div>
                <div className="my-5">
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
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
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
                        <button type="button" onClick={handleResetPassword} className="btn btn-dark btn-sm">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;