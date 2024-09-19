

export const SignUp = () => {
    return (
        <div className="flex-grow content-center">
            <label className="flex justify-center font-bold text-4xl">Register</label>
            <form className="my-14 text-black">
                <input 
                    type="text" 
                    placeholder="Nombre"
                    className="w-full py-4 px-6 rounded-lg" 
                    // value={ email }
                    name='name'
                    // onChange={ onInputChange }
                />
                <input 
                    type="text" 
                    placeholder="Email"
                    className="w-full py-4 px-6 mt-10 rounded-lg" 
                    // value={ email }
                    name='email'
                    // onChange={ onInputChange }
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="w-full py-4 px-6 mt-10 rounded-lg"
                    // value={ password } 
                    name='password'
                    // onChange={ onInputChange }
                />
                <button type="submit" className="w-full py-4 mt-20 text-black text-lg rounded-lg bg-yellow">Register</button>
                
            </form>
        </div>
    )
}