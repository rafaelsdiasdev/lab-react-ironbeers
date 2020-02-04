import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class Beers extends Component {
    constructor() {
        super();
        this.state = { listOfBeers: [], searchBeer: '' };
    }

    searchBeer(string) {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${string}`)
            .then(responseFromApi => {
                // console.log('==>', responseFromApi)
                this.setState({
                    listOfBeers: responseFromApi.data
                })
            })
    }

    getAllBeers = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(responseFromApi => {
                // console.log(responseFromApi)
                this.setState({
                    listOfBeers: responseFromApi.data
                })
            })
    }

    componentDidMount() {
        this.searchBeer()
        this.getAllBeers();
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.searchBeer(value)
        this.setState({ searchBeer: value });
    }

    render() {
        const beers = this.state.listOfBeers
        return (
            <div className="container">
                <div className="row flex-column">
                    <div className="col">
                        <div className="form-group search mt-4">
                            <input style={{ minWidth: "150px" }} className="form-control" value={this.state.searchBeer} placeholder="Search to beer" onChange={e => this.handleChange(e)} />
                        </div>
                    </div>
                    {beers.map(beer =>
                        <div className="row borderBotton align-items-center pt-4 pb-4" key={beer._id}>
                            <div className="col-sm-2 d-flex justify-content-center">
                                <figure className="pl-4 pr-4">
                                    <img className="imagem" style={{ maxHeight: "140px" }} src={beer.image_url} alt={beer.name}></img>
                                </figure>
                            </div>
                            <div className="col-sm-10 align">
                                <div>
                                    <NavLink className="align-text" to={`/beers/${beer._id}`}><h5 style={{ color: "black" }}>{beer.name}</h5></NavLink>
                                    <h5 className="align-text" style={{ color: "gray" }}>{beer.tagline}</h5>
                                    <p className="align-text">Created by: {beer.contributed_by}</p>

                                </div>
                                {/* <hr /> */}
                            </div>
                        </div>)}
                </div>
            </div>
        )
    }


}

export default Beers