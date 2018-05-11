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

  markAsRead = () => {
    console.log('mark as read');
  }

  markAsUnread = () => {
    console.log('mark as read');
  }


  render(){
    const seeds = this.state.seeds
    const handleMessageSelect = this.handleMessageSelect
    const handleMessageStar = this.handleMessageStar
    const handleSelectAll = this.handleSelectAll
    const markAsRead = this.markAsRead
    const markAsUnread = this.markAsUnread
    return (
      <div className='container'>
        <Toolbar {...{seeds, handleSelectAll, markAsRead, markAsUnread}}/>
        <Messages {...{seeds, handleMessageSelect,  handleMessageStar, handleSelectAll}}/>
      </div>
    )
  }
}


export default Inbox
