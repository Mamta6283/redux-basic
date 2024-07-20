import React from 'react';
import { useSelector } from 'react-redux';

function MovieDetails(props) {
    const details =useSelector ((state)=>(state.details))
    return (
        <div className='details'>
           {
            details?
            <>
               <h4>{details.title}</h4>
               <h4>{details.lead}</h4>
               <p>{details.year}</p>
            </>:
            <p>Please select a movie to show details</p>
           }
        </div>
    );
}

export default MovieDetails;