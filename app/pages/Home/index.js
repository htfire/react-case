import React, { Component } from 'react';
import Header from '../../components/Header'
class Home extends Component {
  render() {
    return (
      <div>
          <Header title="首页" />
          <div className="Home">
            这里是HOME页面
          </div>
      </div>
    );
  }
}

export default Home;
