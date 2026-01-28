import { useState, useEffect } from 'react'
import movieArray from './assets/movieArray'
import './App.css'

function App() {

  // stato per il genere selezionato
  const [selectedGenre, setSelectedGenre] = useState("");

  // stato per i film da mostrare
  const [filteredMovies, setFilteredMovies] = useState(movieArray);

  // useEffect che gestisce il filtro
  useEffect(() => {
    // se non è selezionato nessun genere
    if (selectedGenre === "") {
      setFilteredMovies(movieArray);
    } else {
      const filtered = movieArray.filter(
        movie => movie.genre === selectedGenre
      );
      setFilteredMovies(filtered);
    }
  }, [selectedGenre]);

  return (
    <div>
      <h1>React Movie Filter</h1>

      {/* select per scegliere il genere */}
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">Tutti i generi</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>

      {/* lista dei film */}
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App