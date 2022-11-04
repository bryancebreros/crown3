import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../../button/button.component";
import "./sign-up.styles.scss";
const defaultFormFields ={
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { name, email, password, confirmPassword} = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {name});
            resetFormFields();
        }catch(error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('email already in use')
            }
            console.log("A problem ocurred", error.message);
        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }
    return (
        <div>
            <h2>Don't have an account?</h2>
            <span>Sign up</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Name" type="text" required onChange={handleChange} name='name' value={name}/>
                
                <FormInput label="Email" type="email" required onChange={handleChange} name='email' value={email}/>
          
                <FormInput label="Password"type="password" required onChange={handleChange} name='password' value={password}/>
             
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <Button buttonType={BUTTON_TYPE_CLASSES.google} type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp