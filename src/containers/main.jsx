import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Main extends Component {

  static propTypes = {
    firstView: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
    errorMsg: PropTypes.string.isRequired,
  }

  render () {
    const {firstView, loading, users, errorMsg} = this.props
    if(firstView) {
      return <h2>请输入关键字进行搜索</h2>
    } else if (loading) {
      return <h2>正在请求中...</h2>
    } else if(users.length>0){
      return (
        <div className="row">
          {
            users.map((user, index) => (
              <div className="card" key={index}>
                <a href={user.url} target="_blank">
                  <img src={user.avatarUrl} style={{width: 100}}/>
                </a>
                <p className="card-text">{user.username}</p>
              </div>
            ))
          }
        </div>
      )
    } else {
      return <h2>{errorMsg}</h2>
    }
  }
}

export default connect(
  state => state // state是包含4个prop属性的对象
)(Main)