import { Navbar } from "@/components/landing";

export default function LandingLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar/>
                {children}
            </body>
        </html>
    );
}