import Image from "next/image";

export const Cards = () => {
    return (
        <div className="flex flex-col gap-4 text-white">
            <label>Popular</label>
            <div className="flex flex-col h-72 w-48 rounded bg-yellow">
                <div className="relative h-3/5 overflow-hidden">
                    <Image 
                        src={'/images/login/imgLogin.png'} 
                        layout="fill" 
                        objectFit="cover" 
                        alt="Login Image"
                        className="rounded" 
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-lg">Shrek 5</label>
                    <label className="text-sm">Fecha</label>
                    <div className="flex justify-center mt-2 gap-6 ">
                        <div className="flex flex-col">
                            <label className="text-xs">Rating</label>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xs">Favorites</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


