'use client';
import { getMovieSelectId } from "@/lib/APICalls"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

const SelectMovie = ({params}) => {
  const { id } = params
  const router = useRouter();
  const urlImgPanel = 'https://image.tmdb.org/t/p/w1280';
  const urlImgCard = 'https://image.tmdb.org/t/p/w780';
  const [detailsMovie, setDetailsMovie] = useState({});
  useEffect(() => {
    getMovieSelectId(id).then((data)=>{
      setDetailsMovie(data);
    }).catch((error)=>{
      console.error("Error al cargar datos desde TMBD:", error);
      setDetailsMovie({})
    })
  }, [id])
  
  const handleBack = () =>{
    router.push('/landing');
  }

    return (
      <div className="h-screen bg-grayLight">
        <div className="h-3/5 mt-16 bg-yellow">
          <div 
            className="absolute top-16 left-0 w-full h-3/5 bg-cover bg-center"
            style={{ backgroundImage: `url(${urlImgPanel}${detailsMovie.backdrop_path})` }}
          >
            <div className=" h-full w-full">
              <div className="flex flex-col h-full">
                <div className="mt-2 p-4 w-fit cursor-pointer" onClick={handleBack}>
                  <Image src={'/images/landing/iconArrowLeft.png'} width={15} height={15}/>
                </div>
                <div className="flex h-full w-full gap-10">
                  <div className="flex flex-col h-full w-1/5 pl-20 pb-10 gap-4">
                    <div className="relative h-full w-full overflow-hidden shadow-2xl">
                      <Image
                        src={`${urlImgCard}${detailsMovie.poster_path}`} 
                        layout="fill" 
                        objectFit="cover" 
                        alt="Login Image"
                        className="rounded shadow-2xl"
                      />
                    </div>
                    
                    <button className="p-4 rounded shadow-2xl bg-yellow">Official Trailer</button>
                  </div>

                  <div className="flex flex-col w-4/5 mr-40 text-white">
                    <label className="text-5xl font-bold">{detailsMovie.title}</label>
                    <label>{ detailsMovie.release_date }</label>
                    <label className="my-6 text-3xl">Overview:</label>
                    <p className="text-lg">{detailsMovie.overview}</p>
                  </div>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SelectMovie
