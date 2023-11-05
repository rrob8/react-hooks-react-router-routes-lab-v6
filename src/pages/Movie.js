import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {

  const [movie, setMovie] = useState({})

  const params = useParams();
  

  const movieId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error))
  }, [movieId]);


  

  console.log(movie.genres)
  return (
    <>
      <header>
       <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Movie Time: {movie.time} mins</p>
         {movie.genres ? movie.genres.map((genre)=>{ 
          return <span key={genre}>{genre}</span>
        
     }): <h1> Loading...</h1> }  
     
      </main>
    </>
  );
};

export default Movie;
