import React, { Component} from 'react';

class Home extends Component {
    render () {
        return (
            <>
            <header class="jumbotron my-4">
                <h1 class="display-3">Start Movies</h1>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
                <a href="a" class="btn btn-primary btn-lg">Call to action!</a>
            </header>

            <div class="row text-center">
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card h-100">
                    <img class="card-img-top" src="http://placehold.it/500x325" alt="" />
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                    </div>
                    <div class="card-footer">
                        <a href="a" class="btn btn-primary">Find Out More!</a>
                    </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Home