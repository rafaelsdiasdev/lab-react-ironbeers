import React, { Component } from 'react';
import axios from 'axios';

class RandomBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getRandomBeer()
    }

    getRandomBeer = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random/`)
            .then(responseFromApi => {
                const theBeer = responseFromApi.data
                // console.log(theBeer)
                this.setState(theBeer)
            })
    }

    render() {
        const beer = this.state
        return (
                <div className="container">
                    <div className="row flex-column mt-4 pl-4 pr-4">
                        <div className="col"></div>
                        <div className="col d-flex justify-content-center">
                            <img style={{ maxHeight: "200px" }} src={beer.image_url} alt={beer.name}></img>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5 style={{ textAlign: "left" }}>{beer.name}</h5>
                            </div>
                            <div className="col">
                                <p style={{ textAlign: "end", color: "gray" }}>{beer.attenuation_level}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5 style={{ textAlign: "left", color: "gray" }}>{beer.tagline}</h5>
                            </div>
                            <div className="col">
                                <p style={{ textAlign: "end" }}>{beer.first_brewed}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p style={{ textAlign: "left" }}>{beer.description}</p>
                                <p style={{color: "gray", textAlign: "left"}}>{beer.contributed_by}</p>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
        )
    }
}

export default RandomBeer