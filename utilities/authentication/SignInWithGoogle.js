import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "../../firebaseConfig.js";


export async function signInUserWithGoogle () {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
        return "success";
    } catch (error) {
        console.error(error);
        return "error";
    }
};








