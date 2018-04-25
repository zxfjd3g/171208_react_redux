import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {search} from '../redux/actions'

// UI组件
class Search extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired
  }

  search = () => {
    // 读取输入的关键字
    const searchName = this.refs.searchName.value
    // 如果有输入, 开始搜索(通知main组件)
    if(searchName) {
      // 调用一个异步action去异步查询数据
      this.props.search(searchName)
    }
  }


  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref='searchName'/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}

// 向外暴露的是容器组件
export default connect(
  null,
  {search}
)(Search)