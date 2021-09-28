import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'NRum6yDVEFNLVJMC6jV6P7Zr21PNqFWW';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

            
// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
    
    state ={
        searchTerm: '',
        reviews: []
    }

    fetchMovies = (event) => {
        event.preventDefault();
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(data => this.setState({ 
            reviews: data.results
        }))
    }

    updateSearchTerm = event => {
        this.setState({searchTerm: event.target.value})
    }
    
    render() {
        return (
            <div className="search-movie-reviews">
                <form onSubmit={this.fetchMovies}>
                    <input id="searchTerm" type="text" onChange={this.updateSearchTerm} />
                    <button type="submit">Submit</button>
                </form>
            {<MovieReviews movies={this.state.reviews}/>}
            </div>           
        )
    }
}