import React from 'react'
import {connect} from 'react-redux'
import Counter from '../components/counter'
import {increment, decrement, incrementAsync} from '../redux/actions'

// 将状态映射到标签属性(一般属性)
const mapStateToprops = state => ({count: state}) // 函数返回值对象中的所有属性都会成为Counter的一般属性

/*const mapDispatchToProps = dispatch => ({ // 函数返回值对象中的所有方法都会成为Counter的函数属性
  increment: number => dispatch(increment(number)),
  decrement: number => dispatch(decrement(number)),
})*/
const mapDispatchToProps = {increment, decrement, incrementAsync}
export default connect(
  mapStateToprops,  // 指定被包装UI组件的一般属性
  mapDispatchToProps // 指定被包装UI组件的函数属性
)(Counter) // 返回一个容器组件, 内部包装UI组件
// 容器组件会自动向UI组件传递指定的标签属性

