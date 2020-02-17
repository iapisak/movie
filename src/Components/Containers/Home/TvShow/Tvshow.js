import React, { Component } from 'react';

class TvShows extends Component {
    state = {
        tvShows: this.props.tvShow,
    }

    handleOnMouseOver = () => {
        this.props.setTvShow( this.state.tvShows )
    }

    render () {
        return (
            <div className="item">
                <img onMouseOver={ this.handleOnMouseOver } 
                    className="bd-placeholder-img" 
                    src= { "https://image.tmdb.org/t/p/w185" + this.props.tvShow.poster_path } 
                    alt={ this.props.tvShow.id } />
            </div>
        )
    }
}

export default TvShows