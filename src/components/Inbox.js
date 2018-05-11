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

  handleSelectAll = () => {
    let {seeds} = this.state
    if (seeds.every(data => data.selected)) {
      seeds = seeds.map(el => ({...el, selected: false }))
      // set seeds  = unselected
    } else {
      seeds = seeds.map(el => ({...el, selected: true }))
      // set seeds = select all
    }
    this.setState({seeds})
  }


  render(){
    const seeds = this.state.seeds
    const handleMessageSelect = this.handleMessageSelect
    const handleMessageStar = this.handleMessageStar
    const handleSelectAll = this.handleSelectAll
    const props = {seeds, handleMessageSelect,  handleMessageStar, handleSelectAll}
    return (
      <div className='container'>
        <Toolbar {...props}/>
        <Messages {...props}/>
      </div>
    )
  }
}


export default Inbox
