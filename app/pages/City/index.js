import React, { Component } from 'react';

class City extends Component {
    // state = {  }
    constructor(props, context) {
        super(props, context);
        console.log(props)
    }
    render() {
        return (
            <div>
            这里是City页面
            </div>
        );
    }
}

export default City;