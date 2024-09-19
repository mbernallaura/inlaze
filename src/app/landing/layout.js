import { Navbar } from "@/components/landing/navbar";


export default function LandingLayout({ children }) {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
}