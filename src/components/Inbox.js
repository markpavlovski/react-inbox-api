import React, {Component} from 'react'
import Toolbar from './Toolbar'
import Messages from './Messages'
import seeds from '../seeds.json'


class Inbox extends Component {
  constructor(){
    super()
    this.state = {seeds}
  }

  handleMessageSelect = (id, selected) => {
    const seeds = this.state.seeds.map(el => el.id === id ? {...el, selected} : el)
    this.setState({seeds})
  }

  handleMessageStar = (id) => {
    const seeds = this.state.seeds.map(el => el.id === id ? {...el, starred: !el.starred } : el)
    this.setState({seeds})
  }


  render(){
    const seeds = this.state.seeds
    const handleMessageSelect = this.handleMessageSelect
    const handleMessageStar = this.handleMessageStar
    return (
      <div className='container'>
        <Toolbar seeds = {seeds}/>
        <Messages seeds = {this.state.seeds} handleMessageSelect={this.handleMessageSelect} handleMessageStar={this.handleMessageStar}/>
      </div>
    )
  }
}


export default Inbox
