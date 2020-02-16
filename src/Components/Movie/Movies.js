import React, { Component } from 'react';

class Movies extends Component {
    
    render () {
        return (
            
                <>
                <img src= { this.props.movie.poster_src } />
                {/* <p>{ this.props.movie.overview }</p> */}
                </>
            
        )
    }
}

export default Movies