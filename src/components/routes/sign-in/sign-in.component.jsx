import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>SIgnin</h1>
            <button onClick={logGoogleUser}>SignIn Google</button>
        </div>
    )
}

export default SignIn