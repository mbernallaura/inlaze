import React from 'react'

export const Login = () => {
    return (
        <div className="flex-grow">
            <label className="flex justify-center">We love having you back</label>
            <form className="my-14">
                <input type="text" className="w-full py-4 px-6 rounded-lg" placeholder="Email"/>
                <input type="text" className="w-full py-4 px-6 mt-10 rounded-lg" placeholder="Password"/>
                <button className="w-full py-4 mt-20 text-black text-lg rounded-lg bg-yellow">Continue</button>
            </form>
        </div>
    )
}
