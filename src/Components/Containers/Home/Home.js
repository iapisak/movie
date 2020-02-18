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
        const api_key = process.env.REACT_APP_API_KEY
        this.nowPlaying(api_key)
        this.tvShow(api_key)
    }

    nowPlaying = (key) => {
        const movies = []
        axios.get(`${process.env.REACT_APP_API_URL}/movie/now_playing?api_key=${ key }&language=en-US&page=1`)
        .then(res => {
            res.data.results.forEach(item => {
                item.poster = 'https://image.tmdb.org/t/p/w400' + item.poster_path
                movies.push(item)
            })
            this.setState({ nowPlaying: movies, currentMovie: movies[0] })
        })
    }

    tvShow = (key) => {
        const tv = []
        axios.get(`${process.env.REACT_APP_API_URL}/tv/popular?api_key=${ key }&language=en-US&page=1`)
        .then(res => {
            res.data.results.forEach(item => {
                item.poster = 'https://image.tmdb.org/t/p/w400' + item.poster_path
                tv.push(item)
            })
            this.setState({ tvShow: tv, currentTvShow: tv[0] })
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
                <div className="content d-flex jumbotron p-4 p-md-5 text-white rounded bg-dark" 
                     style={{ backgroundImage: `url('${this.state.currentMovie.poster}')` }} >
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
                    <div className="item">see All</div>
                </div>

                <h1>TV show</h1>
                <div className="content jumbotron p-4 p-md-5 text-white rounded bg-dark"
                     style={{ backgroundImage: `url('${this.state.currentTvShow.poster}')` }} >
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