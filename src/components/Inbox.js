import React, {Component} from 'react'
import Toolbar from './Toolbar'
import Messages from './Messages'
import seeds from '../seeds.json'


// helper functions

const getNewLabels = (selected, currentLabels, newLabel) => {
  if (!selected || newLabel === 'Apply label') return currentLabels
  const labelExists = currentLabels.find(label => label === newLabel)
  const labels = labelExists ? currentLabels : [...currentLabels, newLabel].sort()
  return labels
}


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
    } else {
      seeds = seeds.map(el => ({...el, selected: true }))
    }
    this.setState({seeds})
  }

  handleDelete = () => {
    const seeds = this.state.seeds.filter(el => !el.selected)
    this.setState({seeds})
  }

  markAsRead = () => {
    const seeds = this.state.seeds.map(el => ({...el, read: el.selected ? true : el.read }))
    this.setState({seeds})
  }

  markAsUnread = () => {
    const seeds = this.state.seeds.map(el => ({...el, read: el.selected ? false : el.read }))
    this.setState({seeds})
  }

  handleAddLabel = newLabel => {
    const seeds = this.state.seeds.map(el => ({...el, labels: getNewLabels(el.selected, el.labels,newLabel)}))
    this.setState({seeds})

    console.log(newLabel);
    console.log('!!!!',seeds);

  }



  render(){
    const seeds = this.state.seeds
    const handleMessageSelect = this.handleMessageSelect
    const handleMessageStar = this.handleMessageStar
    const handleSelectAll = this.handleSelectAll
    const handleDelete = this.handleDelete
    const handleAddLabel = this.handleAddLabel
    const markAsRead = this.markAsRead
    const markAsUnread = this.markAsUnread
    return (
      <div className='container'>
        <Toolbar {...{seeds, handleSelectAll, markAsRead, markAsUnread, handleDelete, handleAddLabel}}/>
        <Messages {...{seeds, handleMessageSelect,  handleMessageStar, handleSelectAll}}/>
      </div>
    )
  }
}


export default Inbox
