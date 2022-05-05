import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState(
    [
      {
          "Title": "Star Trek",
          "Year": "2009",
          "imdbID": "tt0796366",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg"
      },
      {
          "Title": "Star Trek II: The Wrath of Khan",
          "Year": "1982",
          "imdbID": "tt0084726",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNmZiZmM2OTUtZDlmOC00YzYyLThkMGEtZWFkMjJmM2EwZDVkXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
      },
      {
          "Title": "Star Trek: The Next Generation",
          "Year": "1987–1994",
          "imdbID": "tt0092455",
          "Type": "series",
          "Poster": "https://m.media-amazon.com/images/M/MV5BOWFhYjE4NzMtOWJmZi00NzEyLTg5NTctYmIxMTU1ZDIxMDAyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
      },
      {
          "Title": "Star Trek: The Motion Picture",
          "Year": "1979",
          "imdbID": "tt0079945",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNjk1ZjAyZjktZTY4YS00NDY3LWIwMzktMjZiNGIzODFiZDVmXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
      },
      {
          "Title": "Star Trek IV: The Voyage Home",
          "Year": "1986",
          "imdbID": "tt0092007",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZmU3ZGE3NzEtYTdmYi00YTYxLWIxYTItZGY5YjFlOTA2NWI3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
      },
  ]);

 return (
		<div className='container-fluid movie-app'>
			<div className='row'>

			</div>
		</div>
	);
};

export default App;