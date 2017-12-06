import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions from '../../store/actions/userInfo'

import A from './subpage/A'
import B from './subpage/B'
import C from './subpage/C'

class User extends Component {
  render () {
    return (
      <div>
        <p>这里是user页面</p>
        <hr/>
        <A userinfo={this.props.userinfo}/>
        <hr/>
        <B userinfo={this.props.userinfo}/>
        <hr/>
        <C actions={this.props.userinfoActions}/>
      </div>
    )
  }
  componentDidMount () {
    // 模拟登陆
    this.props.userinfoActions.login({
      userid: 'abc',
      city: 'beijing'
    })
  }
}

function mapStateToProps (state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps (dispatch) {
  return {
    userinfoActions: bindActionCreators(userinfoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
