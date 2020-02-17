import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from '../Components/Containers/Home/Home';
import Login from '../Components/Auth/Login';

export default () => {
    return (
        <Switch>
            <Route exact path ='/' 
                render = {() => <Home /> }
            />

            <Route path='/login' 
                render = {() => <Login /> }
            />
        </Switch>
    )
}