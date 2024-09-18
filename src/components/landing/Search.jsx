import Image from "next/image";


export const Search = () => {
    return (
        <div className="flex flex-col gap-4 mt-4 border-b-2 border-grayLight ">
            <label>Search</label>
            <div className="flex w-full px-4 justify-between items-center rounded-md bg-blackDark">
                <input type="text" className="w-full py-2 rounded-md bg-blackDark" placeholder="Keywords"/>
                <Image src={'/images/landing/iconSearch.png'} width={15} height={15}/>
            </div>
        </div>
    )
}
