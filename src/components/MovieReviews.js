// Code MovieReviews Here
import React from 'react';

const MovieReviews = (movies) => {
    // An array of HTML movie cards
    let movieCards = movies.movies.map(movie => {
        return( 
                <h3>
                    {movie.display_title}
                    <h5>{movie.summary_short}</h5>
                <br/></h3>
        )
    });
    
    return (
        <div className="review-list">
            {movieCards}
        </div>
    )
    
}    

export default MovieReviews
