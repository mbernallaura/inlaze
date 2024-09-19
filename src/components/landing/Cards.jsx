import Image from "next/image";

export const Cards = ({title, date, img, handle}) => {
    return (
        <div className="flex flex-col gap-4 text-white">
            <div className="flex flex-col h-80 w-48 rounded cursor-pointer bg-yellow" onClick={handle}>
                <div className="relative h-3/5 overflow-hidden">
                    <Image 
                        src={img} 
                        layout="fill" 
                        objectFit="cover" 
                        alt="Login Image"
                        className="rounded" 
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-base">{ title }</label>
                    <label className="text-sm">{ date }</label>
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


