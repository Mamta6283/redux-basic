import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
       <Counter></Counter>

       <MovieList></MovieList>
       <MovieDetails></MovieDetails>


      {/* </header> */}
    </div>
  );
}

export default App;
