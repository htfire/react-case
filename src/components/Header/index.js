import React, { Component } from 'react';

class Header extends Component {
    // state = {  }
    render() {
        return (
            <header className="common_head">
                <span className="header_icon">
                    <img src="../../static/img/white-back.png" />
                </span>
                <span className="header_title">{this.props.title}</span>
                <span>阿拉斯加的发卡机是</span>
            </header>
        );
    }
}

export default Header;