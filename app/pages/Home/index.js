import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

import Header from '../../components/Header'

class Home extends Component {
  render() {
    return (
      <div>
        <Header title="首页" />
        <div className="Home">
          这里是HOME页面
        </div>
        <Link to="/City/asdf">City</Link>
      </div>
    );
  }
}

export default Home;
