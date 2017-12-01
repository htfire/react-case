import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import Carousel from '../../components/Carousel'
import TopHead from './subpage/TopHead'
import List from './subpage/List'

class Home extends Component {
  render () {
    let homeLists = [
      {id: 1, name: '上海麦当劳仙乐斯餐厅'},
      {id: 2, name: '上海麦当劳仙乐斯餐厅'},
      {id: 3, name: '上海麦当劳仙乐斯餐厅'},
      {id: 4, name: '上海麦当劳仙乐斯餐厅'},
      {id: 5, name: '上海麦当劳仙乐斯餐厅'}
    ]
    return (
      <div>
        <TopHead title="首页" />
        <Carousel/>
        <List data={homeLists}/>
      </div>
    )
  }
}

export default Home
