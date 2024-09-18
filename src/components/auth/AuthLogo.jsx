import Image from 'next/image';

export const AuthLogo = ({title, subtitle, img}) => {
    return (
        <div className='flex flex-col items-center w-2/5 pt-20 px-12  bg-black'>
            <label className="flex justify-center text-6xl text-center">{ title }</label>
            <label className="flex justify-center my-20 text-3xl text-center">{ subtitle }</label>
            <Image className="flex" src={img} width={400} height={400}></Image>
        </div>
    )
}
