import { Navbar } from "@/components/landing/navbar";


export default function LandingLayout({ children }) {
    return (
        <div className="flex flex-col">
            <Navbar/>
            {children}
        </div>
    );
}