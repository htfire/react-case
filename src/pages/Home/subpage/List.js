import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import ListItem from '../../../components/ListItem'
import './style.less'
import asd from '../../../static/img/activity_top.png'
class List extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      index: 0
    }
  }

  render () {
    return (
      <div className="list-box">
        <div className="list-title">猜你喜欢</div>
        <div className="list-container">
          {this.props.data.map((item, index) => {
            return <ListItem key={index} data={item}/>
          })}
        </div>
      </div>
    )
  }
}

export default List
