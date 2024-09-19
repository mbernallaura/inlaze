/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['image.tmdb.org'],
    },
    // async headers(){
    //     return[
    //         {
    //             source: "/(.*)", // Aplica a todas las rutas
    //             headers: [
    //                 {
    //                     key: "Cross-Origin-Opener-Policy",
    //                     value: "same-origin-allow-popups", // Permite ventanas emergentes
    //                 },
    //             ]
    //         }
    //     ]
    // }
};

export default nextConfig;
