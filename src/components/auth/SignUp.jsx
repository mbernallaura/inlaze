import { useForm } from "@/hooks/useForm"
import { startCreatingWithEmailPassword } from "@/store/auth"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const formData = {
    email: '',
    password: '',
    displayName:''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El email debe tener un @'],
    password: [(value) => value.length >=6 , 'El password debe tener mas de 6 letras'],
    displayName: [(value) => value.length >=1, 'El nombre es obligatorio']
}

export const SignUp = () => {
    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo(() => status === 'checking');
    const [submited, setSubmited] = useState(false);
    const {
        displayName ,email, password, onInputChange, formState,
        displayNameValid, emailValid, passwordValid, isFormValid
    } =useForm(formData, formValidations);

    const handleSubmit = (event) =>{
        event.preventDefault();
        setSubmited(true);
        if(!isFormValid)return;
        dispatch(startCreatingWithEmailPassword(formState));
    }
    return (
        <div className="flex-grow content-center">
            <label className="flex justify-center font-bold text-4xl">Register</label>
            <form onSubmit={ handleSubmit } className="my-14 text-black">
                <div>
                    <input 
                        type="text" 
                        placeholder="Nombre"
                        className="w-full py-4 px-6 rounded-lg" 
                        value={ displayName }
                        name='displayName'
                        onChange={ onInputChange }
                    />
                    {(displayNameValid && submited) && <div className="error-message text-red-400">{displayNameValid}</div>}
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Email"
                        className="w-full py-4 px-6 mt-6 rounded-lg" 
                        value={ email }
                        name='email'
                        onChange={ onInputChange }
                    />
                    {(emailValid && submited) && <div className="error-message text-red-400">{emailValid}</div>}
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder="Password"
                        className="w-full py-4 px-6 mt-6 rounded-lg"
                        value={ password } 
                        name='password'
                        onChange={ onInputChange }
                    />
                    {(passwordValid && submited) && <div className="error-message text-red-400">{passwordValid}</div>}
                </div>
                {errorMessage && (
                    <div className="error-message mt-6 text-red-400">{errorMessage}</div>
                )}
                <button disabled={ isCheckingAuthentication } type="submit" className="w-full py-4 mt-20 text-black text-lg rounded-lg bg-yellow">Register</button>
            </form>
        </div>
    )
}