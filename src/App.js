import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import AxiosGetRquest from './axios/AxiosGetRquest';
import AxiosPostRquest from './axios/AxiosPostRquest';
import AxiosPutRquest from './axios/AxiosPutRquest';
import AxiosDeleteRquest from './axios/AxiosDeleteRquest';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
       <Counter></Counter>

       {/* <MovieList></MovieList> */}
       {/* <MovieDetails></MovieDetails> */}

       {/* <AxiosGetRquest></AxiosGetRquest> */}

       {/* <AxiosPostRquest></AxiosPostRquest> */}

       <AxiosPutRquest></AxiosPutRquest>

       <AxiosDeleteRquest></AxiosDeleteRquest>


      {/* </header> */}
    </div>
  );
}

export default App;
