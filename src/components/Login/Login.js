import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import login from "../../images/login.jpg";

const Login = () => {
  const {
    signInUsingGoogle,
    handleEmailChange,
    handleNameChange,
    handlePasswordChange,
    handleRegistration,
    handleResetPassword,
    isLogin,
    error,
    toggleLogin,
    setIsLoading
  } = useAuth();

  // redirecting
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/'


  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  }


  return (
    <div className="container">
      <div>
        <img className="img-fluid mt-3" src={login} alt="" />
      </div>
      <div className="row border shadow rounded my-4 mx-2">
        {/* social login */}
        <div className="col-md-5 border-end border-2 border-primary ">
          <h3 className="my-4 text-primary">Login With Social Network</h3>
          <button onClick={handleGoogleLogin} className="btn btn-danger my-3">
            <i className="fab fa-google"></i> Login with Google
          </button>
          <br />
          <button className="btn btn-primary my-3">
            <i className="fab fa-facebook-f"></i> Login with Facebook
          </button>
        </div>
        {/* email login */}
        <div className="col-md-7 border-start border-primary ">
          <div className="m-3">
            <form onSubmit={handleRegistration}>
              <h3 className="text-primary text-center">
                Please {isLogin ? "Login" : "Register"}
              </h3>
              {!isLogin && (
                <div className="row mb-3">
                  <label
                    htmlFor="inputName"
                    className="col-sm-2 col-form-label"
                  >
                    Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      onBlur={handleNameChange}
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
              )}
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    onBlur={handleEmailChange}
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="Your Email "
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  Password
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    onBlur={handlePasswordChange}
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Your password"
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2 d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      onChange={toggleLogin}
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck1"
                    />
                    <label className="form-check-label" htmlFor="gridCheck1">
                      Already Registered?
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-3 text-danger">
                <p className="text-center">{error}</p>
              </div>
              <button type="submit" className="btn btn-primary">
                {isLogin ? "Login" : "Register"}
              </button>
              <br /> <br />
              <button
                type="button"
                onClick={handleResetPassword}
                className="btn btn-danger btn-sm"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
