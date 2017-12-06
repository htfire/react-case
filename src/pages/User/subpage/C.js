import React, { Component } from 'react'
class C extends Component {
  // stCte = { }
  render () {
    return (
      <div>
        <button onClick={this.changeUserInfo.bind(this)}>修改</button>
      </div>
    )
  }

  changeUserInfo () {
    const actions = this.props.actions
    actions.login({
      userid: '123',
      city: 'nanjing'
    })
  }
}

export default C
