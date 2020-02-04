import React, { Component } from 'react';
import axios from 'axios';

class NewBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: "",
            contributed_by: ""
        };
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const tagline = this.state.tagline;
        const description = this.state.description
        const first_brewed = this.state.first_brewed
        const brewers_tips = this.state.brewers_tips
        const attenuation_level = this.state.attenuation_level
        const contributed_by = this.contributed_by
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
            .then(() => {
                // this.props.getData();
                this.setState({
                    name: "",
                    tagline: "",
                    description: "",
                    first_brewed: "",
                    brewers_tips: "",
                    attenuation_level: "",
                    contributed_by: ""
                });
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleFormSubmit} className="mt-4">
                    <div className="form-group">
                        <label>Name:</label>
                        <input className="form-control" type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
                    </div>

                    <div className="form-group">
                        <label>Tagline:</label>
                        <input className="form-control" type="text" name="tagline" value={this.state.tagline} onChange={e => this.handleChange(e)} />
                    </div>

                    <div className="form-group">
                        <label>Description:</label>
                        <textarea className="form-control" rows="6" type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
                    </div>

                    <div className="form-group">
                        <label>First Brewed:</label>
                        <input className="form-control" type="text" name="first_brewed" value={this.state.first_brewed} onChange={e => this.handleChange(e)} />
                    </div>

                    <div className="form-group">
                        <label>Brewers Tips:</label>
                        <input className="form-control" type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={e => this.handleChange(e)} />
                    </div>

                    <div className="form-group">
                        <label>Attenuation Level:</label>
                        <input className="form-control" type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={e => this.handleChange(e)} />
                    </div>

                    <div className="form-group">
                        <label>Contributed By:</label>
                        <input className="form-control" type="text" name="contributed_by" value={this.state.contributed_by} onChange={e => this.handleChange(e)} />
                    </div>

                    <input className="btn btn-primary btn-block" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default NewBeer;