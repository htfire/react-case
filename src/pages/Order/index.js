import React, { Component } from 'react'

class Order extends Component {
  // state = {  }
  constructor (props, context) {
    super(props, context)
    console.log(props)
  }
  render () {
    return (
      <div>
            这里是Order页面
      </div>
    )
  }
}

export default Order
