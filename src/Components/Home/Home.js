import React, { Component} from 'react';
import axios from 'axios';
import Movies from '../Movie/Movies';

import './Home.css'

class Home extends Component {
    state = {
        nowPlaying : [],
        currentMovie: {},
        tvShow : [],
        currentTvShow: {},
    }

    componentDidMount = () => {
        const api_key = '289ceb9c9f5fe2b134e1433ef8599082'
        this.nowPlaying(api_key)
        this.tvShow(api_key)
    }

    nowPlaying = (key) => {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
        .then(res => {
            this.setState({ nowPlaying: res.data.results, currentMovie: res.data.results[0] })
        })
    }

    tvShow = (key) => {
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`)
        .then(res => {
            this.setState({ tvShow: res.data.results, currentTvShow: res.data.results[0] })
        })
    }

    setCurrentMovie = (movie) => {
        this.setState({ currentMovie: movie })
    }

    render () {
        return ( 
            <div>
                <h1>Popolar in Star Movie</h1>
                <h1>Popolar Movies on Star Movie</h1>
                <div className="content jumbotron p-4 p-md-5 text-white rounded bg-dark">
                    <div className="px-0">
                        <h3 className="font-italic">{ this.state.currentMovie.title }</h3>
                        <p>{ this.state.currentMovie.overview }</p>
                        {/* <p className="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p> */}
                    </div>
                </div>
                {/* <h1>Popolar in Star Movie</h1>
                <div className="content">
                    <div className="background">
                        <div className="left" 
                            style={{ backgroundImage:`url('https://image.tmdb.org/t/p/w185/${this.state.currentMovie.poster_path}')`}}>l</div>
                        <div className="right"></div>
                    </div>
                    <div className="content-container">{ this.state.currentMovie.overview }</div>
                </div> */}

                <div className="containers">
                    { this.state.nowPlaying.map(item => (
                        <Movies 
                            key = { item.id }
                            movie = { item } 
                            setMovie = { this.setCurrentMovie } />
                    ))}
                </div>

                <h1>TV show</h1>
                <div className="content jumbotron p-4 p-md-5 text-white rounded bg-dark">
                    <div className="px-0">
                        <h3 className="font-italic">{ this.state.currentTvShow.original_name }</h3>
                        <p>{ this.state.currentTvShow.overview }</p>
                        {/* <p className="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p> */}
                    </div>
                </div>
                <div className="containers">
                    { this.state.tvShow.map(item => (
                        <Movies 
                            key = { item.id }
                            movie = { item } 
                            setMovie = { this.setCurrentMovie } />
                    ))}
                </div>
            </div>
        )
    }
}

export default Home