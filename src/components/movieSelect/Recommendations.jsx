import Image from "next/image";


const Recommendations = ({title, img}) => {
    return (
        <div className="flex flex-col h-64 w-48 mt-6 rounded cursor-pointer bg-yellow">
            <div className="relative h-4/5 overflow-hidden">
                <Image 
                    src={img} 
                    layout="fill" 
                    objectFit="cover" 
                    alt="Login Image"
                    className="rounded" 
                />
            </div>
            <label className="p-4 text-base">{title}</label>
        </div>
    )
}

export default Recommendations
