import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {increment, decrement} from '../redux/actions'

export default class App extends Component {

  static propType = {
    store: PropTypes.object.isRequired
  }

  increment = () => {
    const num = this.refs.numSelect.value*1
    // const count = this.state.count + num
    // this.setState({count})
    this.props.store.dispatch(increment(num))
  }

  decrement = () => {
    const num = this.refs.numSelect.value*1
    // const count = this.state.count - num
    // this.setState({count})
    this.props.store.dispatch(decrement(num))
  }

  incrementIfOdd = () => {
    let count = this.props.store.getState()
    if(count%2==1) {
      const num = this.refs.numSelect.value*1
      // count += num
      // this.setState({count})
      this.props.store.dispatch(increment(num))
    }
  }

  incrementAsync = () => {
    setTimeout(() => {
      const num = this.refs.numSelect.value*1
      // const count = this.state.count + num
      // this.setState({count})
      this.props.store.dispatch(increment(num))
    }, 1000)
  }

  render () {
    // const {count} = this.state
    const count = this.props.store.getState()

    return (
      <div>
        <p>
          click {count} times {' '}
        </p>
        <select ref="numSelect">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>{' '}
        <button onClick={this.increment}>+</button>{' '}
        <button onClick={this.decrement}>-</button>{' '}
        <button onClick={this.incrementIfOdd}>increment if odd</button>{' '}
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}