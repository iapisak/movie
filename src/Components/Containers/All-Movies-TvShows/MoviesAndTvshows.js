import React, { Component } from 'react'
import axios from 'axios'

class MoviesAndTvshows extends Component {
    state = {
        search_key: 'tv',
        page: '1',
        array: [],
    }

    componentDidMount = () => {
        const { page } = this.state
        const api_key = process.env.REACT_APP_API_KEY
        axios.get(`${process.env.REACT_APP_API_URL}/${ this.state.search_key }/airing_today?api_key=${ api_key }&language=en-US&page=${ page }`)
        .then(res => {
            this.setState({ array: res.data.results})
        })
    }

    keyWordOneClick = () => {
        this.setState({ search_key: !this.state.search_key })
    }

    render () {
        return (
            <div>
                <div onClick = {() => { this.setState({ search_key: 'movie' }) }}>Movies</div>
                <div onClick = {() => { this.setState({ search_key: 'tv' }) }}>TV Shows</div>
            </div>
        )
    }
}

export default MoviesAndTvshows