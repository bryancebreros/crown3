import { useState } from "react";
import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/form-input.component";
import Button from "../../button/button.component";
import "./sign-in.styles.scss";
const defaultFormFields ={
    email: '',
    password: '',
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    const SignInGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log({response});
            resetFormFields();
        }catch(error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('Incorret Password');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(error);
            }
                
        }
        
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
        console.log({formFields});
    }
    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in</span>
            <form onSubmit={handleSubmit}>
                
                
                <FormInput label="Email" type="email" required onChange={handleChange} name='email' value={email}/>
          
                <FormInput label="Password"type="password" required onChange={handleChange} name='password' value={password}/>
             
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" type="submit">GOOGLE Sign In</Button>
                </div>

            </form>
        </div>
    )
}

export default SignIn