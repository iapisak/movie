import React, { Component } from 'react';
import './Movies.css'

class Movies extends Component {
    state = {
        movie: this.props.movie,
    }

    handleOnMouseOver = () => {
        this.props.setMovie( this.state.movie )
    }

    render () {
        return (
            <div className="item">
                <img onMouseOver={ this.handleOnMouseOver } 
                    className="bd-placeholder-img" 
                    src= { "https://image.tmdb.org/t/p/w200" + this.props.movie.poster_path } 
                    alt={ this.props.movie.id } />
            </div>
        )
    }
}

export default Movies