import React, { Component } from 'react'
import './style.less'

class ListItem extends Component {
  // state = {  }
  render () {
    return (
      <div className="list-item">
        <div className="shop-info">
          <div className="logo-container">
            <img src="http://fuss10.elemecdn.com/1/89/56d597e004abf8d30365009c4492bjpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" />
          </div>
          <div className="shop-info-detail">
            <section>
              <h3><span>上海麦当劳仙乐斯餐厅</span></h3>
            </section>
            <section>
              <span>月售6666单</span>
            </section>
            <section>
              <span>配送费6元</span>
            </section>
          </div>
        </div>
        <div className="shop-activity"></div>
      </div>
    )
  }
}

export default ListItem
