import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() =>{
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult( result ); //!Se puede obtener las credenciales y el token 
        const { displayName, email, photoURL, uid } = result.user;
        return{
            ok:true,
            //User info
            displayName, email, photoURL, uid
        }
        // console.log({user});
    } catch (error) {
        const errorMessage = error.message;
        return{
            ok: false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async({email, password, displayName})=>{
    try {
        const resp = await createUserWithEmailAndPassword (FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        await updateProfile(FirebaseAuth.currentUser, { displayName }); //!FirebaseAuth.currentUser = saber el usuario actual en firebase
        return{
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        //? Rectificar que error hay 
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}