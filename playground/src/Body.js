import React, { Component } from 'react';
import './Body.css';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            names: []
        }
    }
    componentDidMount() {
        fetch('/names', {
            header: {
                'Access-Control-Allow-Origin':'*'
            }
        }).then((res) => res.json())
        .then((res) => {
            this.setState({
                names: res
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    handleInput = (event) => {
        this.setState({
            input: event.target.id
        });
    }

    render() {
        return (
            <div>
                <p className="App-intro" >
                    To get started, edit <code onClick={this.props.handleClick}>src/App.js</code> and save to reload.
                </p>
                <input id="inputId" type="text" onChange={this.handleInput}/> 
                <h1>Show state Txt: {this.state.input}</h1>
                {this.state.names.map(((ele) => { return (<h1> {ele.name} </h1>)}))}
            </div>
        )
        
    }
}

export default Body;
