import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'NRum6yDVEFNLVJMC6jV6P7Zr21PNqFWW';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component {
    
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(data => this.setState({ 
            reviews: data.results
        }))
    }
    
    render() {
        return (
            <div className="latest-movie-reviews">
                {<MovieReviews movies={this.state.reviews}/>}
            </div>
        )
    }
}
