import React, { Component } from 'react';

export default class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            b: 0
        };
    }

    addClick = () => {
        this.setState({ b: this.state.b + 1 });
        console.log(`B: ${this.state.b}`);
    };

    render() {
        return (
            <React.Fragment>
                <div> Counter Class Component </div>
                <button onClick={this.addClick}>Add</button>
                <p>B: {this.state.b}</p>
            </React.Fragment>
        );
    }
}
