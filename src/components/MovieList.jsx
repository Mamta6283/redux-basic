import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showDetailsAction } from '../actions';

function MovieList(props) {
    const movies =useSelector ((state)=>state.movies)
    const dispatch =useDispatch(); //we have to call dispatch to call the action on any event
    return (
        <div>
            <h2>MovieList</h2>
            <div className='movie-list'>
               {
                movies.map((movie)=>(
                    <div className='item' key={movie.id}>
                          <p>{movie.id}</p>
                          <p>{movie.title}</p>
                          <p>{movie.lead}</p>
                          <p>{movie.year}</p>
                          <button onClick={()=> {dispatch(showDetailsAction(movie)) }}> Show Details</button>
                    </div>
                ))
               }
            </div>

        </div>
    );
}

export default MovieList;