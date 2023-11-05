import { useEffect, useState } from "react";
import MovieCard from '../components/MovieCard'
import NavBar from "../components/NavBar";

function Home() {

  const [movies, setMovies] = useState([])
  



  useEffect (()=> { 
  fetch(`http://localhost:4000/movies`)
  .then(r=> r.json())
  .then(data=> setMovies(data))
  }
  ,[])

  

  return (
    <>
      <header>
        <h1>Home Page</h1>
        <NavBar />
      </header>
      <main>
        {movies.map((movie)=> 
        <MovieCard key={movie.id} movie={movie} /> )}
      </main>
    </>
  );
};

export default Home;
