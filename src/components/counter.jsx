import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {increment, decrement} from '../redux/actions'

export default class Counter extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired
  }

  increment = () => {
    const num = this.refs.numSelect.value*1
    this.props.increment(num)
  }

  decrement = () => {
    const num = this.refs.numSelect.value*1
    this.props.decrement(num)
  }

  incrementIfOdd = () => {

    const {count, increment} = this.props
    if(count%2==1) {
      const num = this.refs.numSelect.value*1
      increment(num)
    }
  }

  incrementAsync = () => {
    const num = this.refs.numSelect.value*1
    this.props.incrementAsync(num)
  }

  render () {
    const count = this.props.count

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