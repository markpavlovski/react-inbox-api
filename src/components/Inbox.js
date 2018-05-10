import React, {Component} from 'react'
import Toolbar from './Toolbar'
import Messages from './Messages'
import seeds from '../seeds.json'


class Inbox extends Component {
  constructor(){
    super()
    this.state = {seeds}
  }
  render(){
    return (
      <div className='container'>
        <Toolbar seeds = {this.state.seeds}/>
        <Messages seeds = {this.state.seeds}/>
      </div>
    )
  }
}


export default Inbox
