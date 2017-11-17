import React, { Component } from 'react';
import './index.css';

class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }
    
    render() {
        return (
            <div className="name">
                Hello, {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

export default Demo1;