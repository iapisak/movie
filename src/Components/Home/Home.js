import React, { Component} from 'react';
import axios from 'axios';
import Movies from '../Movie/Movies';

class Home extends Component {
    state = {
        popular : []
    }

    componentDidMount = () => {
        const key = '289ceb9c9f5fe2b134e1433ef8599082'
        const movieArray = []
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
        .then(res => {
            res.data.results.forEach(item => {
                item.poster_src = "https://image.tmdb.org/t/p/w185" + item.poster_path
                movieArray.push(item)
            })
            this.setState({ popular: movieArray })
        })
    }

    render () {
        return (
            <div className="d-flex justify-content-start">
            {/* <header className="jumbotron my-4">
                <h1 className="display-3">Start Movies</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
                <a href="a" className="btn btn-primary btn-lg">Call to action!</a>
            </header> */}
            { this.state.popular.map(item => (
                
                <Movies movie={ item } />
            ))}
                
            </div>
        )
    }
}

export default Home