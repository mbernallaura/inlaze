'use client';
import { Cards, Genres, Search } from "@/components/landing";
import { getPopularMovies } from "@/lib/APICalls";
import { useEffect, useState } from "react";

const LandingPage = () => {
    const urlImg = 'https://image.tmdb.org/t/p/w500';
    const [popularMovies, setPopularMovies] = useState([]);


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
            <div className="h-96 mt-16 bg-red-300">
                panel
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
                            popularMovies.map((popularMovie)=>(
                                <Cards 
                                    key={popularMovie.id} 
                                    title={popularMovie.title} 
                                    date={ popularMovie.release_date} 
                                    img={`${urlImg}${popularMovie.backdrop_path}`}
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