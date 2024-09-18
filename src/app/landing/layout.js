import Navbar from "../../components/landing/Navbar.jsx";

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