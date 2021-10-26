import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

  // google login
  // const signInUsingGoogle = () => {
  //   setIsLoading(true);
  //   const googleProvider = new GoogleAuthProvider();
  //   signInWithPopup(auth, googleProvider)
  //     .then(result => {
  //       setUser(result.user);
  //     })
  //     .finally(() => setIsLoading(false));
  // }
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   setUser(result.user);
    // })
    // .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
      else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [])

  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => { })
      .finally(() => setIsLoading(false));
  }

  // email and password login

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // handling password strength
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password must contain two upper case");
      return;
    }

    if (isLogin) {
      processLogin(email, password);
    } else {
      registerNewUser(email, password);
    }
  };

  // const processLogin = (email, password) => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       setError("");
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };
  const processLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        verifyEmail();
        setUserName();
        window.location.reload();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => { });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => { });
  };

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => { });
  };

  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut,
    error,
    handleRegistration,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleResetPassword,
    isLogin,
    toggleLogin,
    setIsLoading
  };
};

export default useFirebase;
