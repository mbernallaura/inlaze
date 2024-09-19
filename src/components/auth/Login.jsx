import { useForm } from "@/hooks/useForm"
import { startGoogleSignIn, startLoginWithEmailPassword } from "@/store/auth";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";


export const Login = () => {
    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector(state => state.auth);
    const {email, password, onInputChange} =useForm({
        email: '',
        password: ''
    })
    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log({email, password});
        dispatch(startLoginWithEmailPassword({email, password})); 
    }

    const handleGoogleSignIn = () =>{
        console.log('GOoogle');
        dispatch(startGoogleSignIn());
    }
    return (
        <div className="flex-grow">
            <label className="flex justify-center">We love having you back</label>
            <form onSubmit={ handleSubmit } className="my-14 text-black">
                <input 
                    type="text" 
                    placeholder="Email"
                    className="w-full py-4 px-6 rounded-lg" 
                    value={ email }
                    name='email'
                    onChange={ onInputChange }
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="w-full py-4 px-6 mt-10 rounded-lg"
                    value={ password } 
                    name='password'
                    onChange={ onInputChange }
                />
                <div className="flex justify-between mt-20 gap-6">
                    <button disabled={ isAuthenticating } onClick={ handleGoogleSignIn } className="w-full py-4 text-white text-lg rounded-lg bg-grayLight">Google</button>
                    <button disabled={ isAuthenticating } type="submit" className="w-full py-4 text-black text-lg rounded-lg bg-yellow">Continue</button>
                </div>
            </form>
        </div>
    )
}
