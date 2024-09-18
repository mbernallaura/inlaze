'use client';
// import AuthLogo from "@/components/auth/AuthLogo";
// import SignUp from "@/components/auth";
// import Login from "@/components/auth/Login";
// import SignUp from "@/components/auth/SignUp"
import { useState } from "react";
import {Login, SignUp, AuthLogo} from "@/components/auth/";

const imgAuth = [
    {
        type: 'signUp',
        title: 'Welcome to Quickbet Movies!',
        subtitle: 'Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!',
        img: '/images/login/imgSingUp.png'
    },
    {
        type: 'login',
        title: 'Welcome back to Quickbet Movies!',
        subtitle: 'Ready to dive into the world of unlimited entertainment? Enter your credentials and let the cinematic adventure begin!',
        img: '/images/login/imgLogin.png'
    }
];

const Auth = () => {
    const [optionAuth, setOptionAuth] = useState('login');
    const authInfo = imgAuth.find(item => item.type === optionAuth);
    
    
    const handleOptionAuth = (option) =>{
        setOptionAuth(option);
    }

    return (
        <div className='flex h-screen text-white bg-grayDark '>
            <div className='p-12 border-spacing-4 w-3/5'>
                <div className="flex justify-center mt-12">
                    <ul className='inline-flex rounded-lg gap-2.5 bg-grayLight'>
                        <li 
                            className={`py-4 px-8 rounded-lg cursor-pointer ${optionAuth === 'signUp' ? 'bg-yellow' : 'bg-grayLight'}`}
                            onClick={()=>handleOptionAuth('signUp')}
                        >Sign Up</li>
                        <li 
                            className={`py-4 px-8 rounded-lg cursor-pointer ${optionAuth === 'login' ? 'bg-yellow' : 'bg-grayLight'}`}
                            onClick={()=>handleOptionAuth('login')}
                        >Log In</li>
                    </ul>
                </div>

                <div className="flex flex-col my-20 mx-36 m h-3/5">
                    { optionAuth === 'signUp' && ( <SignUp/> ) }
                    { optionAuth === 'login' && ( <Login/> ) }
                    <label className="flex justify-center">For any questions, reach out to support@Quickbetdmovies.com</label>
                </div>
            </div>
            { authInfo && ( <AuthLogo title={ authInfo.title } subtitle={ authInfo.subtitle } img={ authInfo.img }/> ) }
        </div>
    )

}

export default Auth;
