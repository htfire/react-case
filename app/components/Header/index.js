import React, { Component } from 'react';

class Header extends Component {
    // state = {  }
    render() {
        return (
            <header className="common_head">
                <span className="header_icon">
                    <img src="../../static/img/white-back.png" />asf
                </span>
                <span className="header_title">{this.props.title}</span>
            </header>
        );
    }
}

export default Header;