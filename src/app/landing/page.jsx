import { Genres, Search } from "@/components/landing";


const LandingPage = () => {
    return (
        <div className="flex flex-col h-screen bg-grayLight">
            <div className="h-2/4 bg-red-300">
                panel
            </div>
            <div className="flex h-full">
                <div className="flex flex-col w-1/5 p-4 text-white bg-grayDark">
                    <Search/>
                    <Genres/>
                </div>
                <div className="w-4/5">
                    panel
                </div>
            </div>
        </div>
    )
}

export default LandingPage;