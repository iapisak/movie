import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from '../Components/Containers/Home/Home';
import MoviesAndTvshows from '../Components/Containers/All-Movies-TvShows/MoviesAndTvshows';
import Login from '../Components/Auth/Login';

export default () => {
    return (
        <Switch>
            <Route exact path ='/' 
                render = {() => <Home /> }
            />

            <Route path = '/movie_tvshow'
                render = {() => <MoviesAndTvshows />}
            />

            <Route path='/login' 
                render = {() => <Login /> }
            />
        </Switch>
    )
}