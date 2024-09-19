'use client';
import { Cards, Genres, Search } from "@/components/landing";
import { getPopularMovies } from "@/lib/APICalls";
import Image from "next/image";
import { useEffect, useState } from "react";

const LandingPage = () => {
    const urlImg = 'https://image.tmdb.org/t/p/w500';
    const urlImgPanel = 'https://image.tmdb.org/t/p/w1280';
    const [popularMovies, setPopularMovies] = useState([]);
    const firstMovie = popularMovies[0] || {};
    const remainingMovies = popularMovies.slice(1);


    useEffect(() => {
        getPopularMovies()
            .then(data => {
                setPopularMovies(data);
            })
            .catch(error => {
                console.error("Error al cargar datos desde Airtable:", error);
                setPopularMovies([]); 
        });
    }, [])
    
    getPopularMovies();

    return (
        <div className="flex flex-col h-full bg-grayLight">
            <div className="h-96 mt-16 shadow-lg bg-red-300">
                {/* <div className="relative h-full overflow-hidden shadow-xl">
                    {firstMovie.backdrop_path && (
                        <Image 
                            src={`${urlImgPanel}${firstMovie.backdrop_path}`}
                            layout="fill" 
                            objectFit="cover"
                            objectPosition="top left"
                            alt="Login Image"
                        />
                    )}
                </div> */}
                <div 
                    className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center"
                    style={{ backgroundImage: `url(${urlImgPanel}${firstMovie.backdrop_path})` }}
                >
                    {/* Texto encima de la imagen */}
                    <div className="absolute bottom-0 left-0 w-full p-10 text-white bg-gradient-to-t from-black to-transparent">
                        <label className="text-4xl font-bold">{firstMovie.title}</label>
                        <p className="text-lg">{firstMovie.overview}</p>
                    </div>
                </div>
            </div>
            <div className="flex ">
                <div className="flex flex-col w-1/5 p-4 text-white bg-grayDark">
                    <Search/>
                    <Genres/>
                </div>
                <div className="flex flex-col w-4/5 p-8 gap-6">
                    <label className=" text-2xl text-white">Popular</label>
                    <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
                        {
                            remainingMovies.map((popularMovie)=>(
                                <Cards 
                                    key={popularMovie.id} 
                                    title={popularMovie.title} 
                                    date={ popularMovie.release_date} 
                                    img={`${urlImg}${popularMovie.poster_path}`}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;