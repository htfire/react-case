import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import './style.less'

class TopHead extends Component {
  render () {
    return (
      <div className="headerInfo">
        <div className="top-box"><span>长泰广场</span> <span>晴</span></div>
        <div className="center-box">
          <span className="icon-search"></span><span>搜索商家，商品名称</span>
        </div>
        <div className="bottom-box">
          <span>奶茶</span>
          <span>奶茶</span>
          <span>奶茶</span>
          <span>奶茶</span>
          <span>奶茶</span>
          <span>奶茶</span>
          <span>奶茶</span>
          <span>奶茶</span>
        </div>
      </div>
    )
  }
}

export default TopHead
