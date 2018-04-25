import React, {Component} from 'react'
import Search from './containers/search'
import Main from './containers/main'


export default class App extends Component {

  render() {
   return (
     <div className="container">
       <Search/>
       <Main/>
     </div>
   )
  }
}