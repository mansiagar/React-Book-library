import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

// action
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";

//action creator

export const signin = (email, password, navigate) => async (dispatch) => {
  console.log(email, password, "in signin");

  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch({ type: SIGNIN_SUCCESS, payload: userCredentials.user });
    navigate("/mybooks");
  } catch (error) {
    console.log("signin error", error);
  }
};

//action creator for sign up

export const signup = (email, password, navigate) => async (dispatch) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;
    dispatch({ type: SIGNUP_SUCCESS, payload: user });
    navigate("/login");
  } catch (error) {
    console.log("signup error", error);
  }
};

//signout
export const signout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch({ type: SIGNOUT_SUCCESS });
  } catch (error) {
    console.log("signOut error", error);
  }
};
