import SignUp from "../signup/sign-up.component";
import SignIn from "../sign-in/sign-in.component";

import "./authentication.styles.scss"
const Authentication = () => {
    return (
        <div className="authentication-container">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentication;