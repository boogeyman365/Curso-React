import { redirect } from "react-router-dom";
import { types } from "../../auth/types/types";
import { loginWithEmailAndPAssword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, finishLoading, login, logout, startLoading } from "./authSlice";

export const checkingAuthentication = ( email, password ) => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() );
  }
}

export const startGoogleSignIn = () => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() );
    const result = await signInWithGoogle();
    if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

    dispatch( login( result ) );
  }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() );
    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

    if ( !ok ) return dispatch( logout({ errorMessage }) );

    dispatch( login({ uid, displayName, email, photoURL }) );
  }
}


export const startLoginWithEmailAndPassword = ({ email, password }) => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() );
    // dispatch( startLoading({type: types.uiStartLoading}) );
    const { ok, uid, photoURL, errorMessage, displayName } = await loginWithEmailAndPAssword({ email, password });

    if ( !ok ) return dispatch( logout({ errorMessage }) );

    dispatch( login({ uid, displayName, email, photoURL }) );
    // redirect('/');
  }

}
