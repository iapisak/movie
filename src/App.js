import React from 'react';
import Navbar from './Components/Nav/Nav';

import { withRouter } from 'react-router-dom';
import Routes from './Config/Routes';

import './App.css'

function App() {
    return (
      <div>
        <Navbar />
        <main className="container">
          <Routes />
        </main>
      </div>
  );
}

export default withRouter(App);
