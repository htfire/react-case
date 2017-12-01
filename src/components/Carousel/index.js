import React, { Component } from 'react'
import ReactSwipe from 'react-swipe'

import './style.less'

class Carousel extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      index: 0
    }
  }

  render () {
    var opt = {
      auto: 2500,
      callback: function (index) {
        // 更新当前轮播图的index
        this.setState({index: index})
      }.bind(this)
    }
    return (
      <div className="carousel-box">
        <ReactSwipe className="carousel" swipeOptions={opt}>
          <div className="carousel-item">
            <div className="item"><span>美食</span></div>
            <div className="item"><span>美食</span></div>
            <div className="item"><span>美食</span></div>
            <div className="item"><span>美食</span></div>
            <div className="item"><span>美食</span></div>
            <div className="item"><span>美食</span></div>
            <div className="item"><span>美食</span></div>
            <div className="item"><span>美食</span></div>
          </div>
          <div className="carousel-item">
            <div className="item"><span>奶茶</span></div>
            <div className="item"><span>奶茶</span></div>
            <div className="item"><span>奶茶</span></div>
            <div className="item"><span>奶茶</span></div>
            <div className="item"><span>奶茶</span></div>
            <div className="item"><span>奶茶</span></div>
            <div className="item"><span>奶茶</span></div>
            <div className="item"><span>奶茶</span></div>
          </div>
          <div className="carousel-item">
            <div className="item"><span>下午茶</span></div>
            <div className="item"><span>下午茶</span></div>
            <div className="item"><span>下午茶</span></div>
            <div className="item"><span>下午茶</span></div>
            <div className="item"><span>下午茶</span></div>
            <div className="item"><span>下午茶</span></div>
            <div className="item"><span>下午茶</span></div>
            <div className="item"><span>下午茶</span></div>
          </div>
        </ReactSwipe>
        <div className="index-container">
          <ul>
            <li className={this.state.index === 0 ? 'selected' : ''}></li>
            <li className={this.state.index === 1 ? 'selected' : ''}></li>
            <li className={this.state.index === 2 ? 'selected' : ''}></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Carousel
