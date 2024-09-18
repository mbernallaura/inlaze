import Image from 'next/image';

export const SignUp = () => {
    return (
        <div className="flex-grow content-center">
            <button className="flex justify-center w-full py-4 rounded-lg text-black text-lg bg-yellow">
                <div className="flex items-center content-center gap-2">
                    <label>Register with your email</label>
                    <Image className="h-fit" src="/images/login/iconEmail.png" width={15} height={15} ></Image>
                </div>
            </button>
        </div>
    )
}