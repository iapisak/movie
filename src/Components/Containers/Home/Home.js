import React, { Component} from 'react';
import axios from 'axios';
import Movies from './Movie/Movies';
import Tvshow from './TvShow/Tvshow';

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
    setCurrentTvShow = (tvShow) => {
        this.setState({ currentTvShow: tvShow })
    }

    render () {
        return ( 
            <div>
                <h1>Popolar Movies on Star Movie</h1>
                <div className="content jumbotron p-4 p-md-5 text-white rounded bg-dark">
                    <div className="px-0">
                        <h3 className="font-italic">{ this.state.currentMovie.title }</h3>
                        <p>{ this.state.currentMovie.overview }</p>
                    </div>
                </div>

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
                        <h3 className="font-italic">{ this.state.currentTvShow.name }</h3>
                        <p>{ this.state.currentTvShow.overview }</p>
                    </div>
                </div>
                <div className="containers">
                    { this.state.tvShow.map(item => (
                        <Tvshow 
                            key = { item.id }
                            tvShow = { item } 
                            setTvShow = { this.setCurrentTvShow } />
                    ))}
                </div>
            </div>
        )
    }
}

export default Home