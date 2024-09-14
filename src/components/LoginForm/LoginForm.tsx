import { useRouter } from "next/router";
import styles from "./LoginForm.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { User } from "@/types";
import { useAuth } from "@/context/AuthContext";
import { isBooleanObject } from "util/types";
import { useSelector, useDispatch } from "react-redux";
import { selectUserData, selectToken, selectIsConfirmed, selectShow, selectTryLogin, selectUser, safeSetUserData, setToken, setUser, setIsConfirmed, setUserData, setTryLogin, setShow, fetchData } from "@/services/AuthReducer";
import { isTokenExpired } from "@/services/AuthReducer";

const LoginForm = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  
  const token = useSelector(selectToken);
  const userData = useSelector(selectUserData); 
  const isConfirmed = useSelector(selectIsConfirmed);
  const tryLogin = useSelector(selectTryLogin);
  const show = useSelector(selectShow);

  const dispatch = useDispatch();


  const checkConfirmation = async () => {
    const data = await dispatch(fetchData(user) as any);

    // console.log(data)

    if (data && data.user && data.user.emailConfirmed) {
      if (data.user.role == "Admin") router.push("/manageUsers");
      else router.push("/multiStepForm");
    } else {
      dispatch(setIsConfirmed(true));
      
      dispatch(setTryLogin(true))
    }
  }

  

  useEffect(() => {
    // console.log(token)
    // console.log(userData)

    
    const storedToken = sessionStorage.getItem("token");
    const storedUser = sessionStorage.getItem("user");

    

    if (userData && userData.emailConfirmed) {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(userData));

      if (userData && userData.role && userData.role == "Admin") router.push("/dashboard");
      else router.push("/multiStepForm");
    } else {
      if (tryLogin) dispatch(setShow(true))
      dispatch(setIsConfirmed(true));
    }
     
  }, [token, userData, tryLogin])

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    const storedUser = sessionStorage.getItem("user");

    if (storedToken && storedUser) {
      router.push("/manageUsers")
    };
  }, [])

  return (
    <div className={styles.form}>
      <p className={styles.title}>Sign in </p>
      <label>
        <input
          required
          placeholder=""
          type="email"
          className={styles.input}
          onChange={(e) =>
            setUser((prevUser: any) => ({ ...prevUser, email: e.target.value }))
          }
        />
        <span>Email</span>
      </label>

      <label>
        <input
          required
          placeholder=""
          type="password"
          className={styles.input}
          onChange={(e) =>
            setUser((prevUser: any) => ({
              ...prevUser,
              password: e.target.value,
            }))
          }
        />
        <span>Password</span>
      </label>
      {show && (
        <div className={styles.errorContainer}>
          <p className={styles.hiddenTextError}>
            Email is not confirmed or account does not exist. Please check your
            email and confirm email or send request for registration
          </p>
        </div>
      )}
      <button onClick={checkConfirmation} className={styles.submit}>
        Submit
      </button>
      <p className={styles.link}>
        <Link href="/forgetPassword">Forgot password?</Link>
      </p>
      <p className={styles.link}>
        <Link href="/">Back</Link>
      </p>
    </div>
  );
};
export default LoginForm;
