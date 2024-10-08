import Image from "next/image";

const navigation = [
    {name: 'Popular', src:'#'},
    {name: 'Favorites', src:'#'}
]

export const Navbar = () => {
    return (
        <nav className="flex justify-between w-full py-4 px-24 items-center fixed z-10 text-white bg-black">
            <div className="flex items-center gap-20">
                <Image src={'/images/landing/logo.png'} width={150} height={150}/>
                <ul className="flex gap-10">
                    {
                        navigation.map(item => (
                            <li key={item.name}>
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <Image src={'/images/landing/imgLogin.png'} width={30} height={30}/>
        </nav>
    )
}
