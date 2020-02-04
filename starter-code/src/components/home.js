import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <picture>
                        <img style={{ width: "100%" }} src='/images/beers.png' alt="Beer"></img>
                    </picture>
                    <div className="info">
                        <h2 style={{ textAlign: "left" }}><NavLink exact to="/beers" style={{ textDecoration: 'none', color: "black" }}>All Beers</NavLink></h2>
                        <p style={{ textAlign: "left", color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, dicta, assumenda recusandae quos neque, culpa veniam excepturi dolores expedita saepe nulla aperiam! Itaque aliquam reprehenderit nemo explicabo provident numquam eligendi?</p>
                    </div>
                    <picture>
                        <img style={{ width: "100%" }} src='/images/random-beer.png' alt="Beer"></img>
                    </picture>
                    <div className="info">
                        <h2 style={{ textAlign: "left" }}><NavLink exact to="/randombeer" style={{ textDecoration: 'none', color: "black" }}>Random Beers</NavLink></h2>
                        <p style={{ textAlign: "left", color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, dicta, assumenda recusandae quos neque, culpa veniam excepturi dolores expedita saepe nulla aperiam! Itaque aliquam reprehenderit nemo explicabo provident numquam eligendi?</p>
                    </div>
                    <picture>
                        <img style={{ width: "100%" }} src='/images/new-beer.png' alt="Beer"></img>
                    </picture>
                    <div className="info">
                        <h2 style={{ textAlign: "left" }}><NavLink exact to="/newbeer" style={{ textDecoration: 'none', color: "black" }}>New Beers</NavLink></h2>
                        <p style={{ textAlign: "left", color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, dicta, assumenda recusandae quos neque, culpa veniam excepturi dolores expedita saepe nulla aperiam! Itaque aliquam reprehenderit nemo explicabo provident numquam eligendi?</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
