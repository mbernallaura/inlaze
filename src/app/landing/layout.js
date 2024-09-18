import { Navbar } from "@/components/landing/navbar";


export default function LandingLayout({ children }) {
    return (
        // <html lang="en">
        //     <body>
        //         <Navbar/>
        //         {children}
        //     </body>
        // </html>
        <div>
            <Navbar/>
            {children}
        </div>
    );
}