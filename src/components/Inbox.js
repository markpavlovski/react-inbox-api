import React, {Component} from 'react'
import axios from 'axios'
import Toolbar from './Toolbar'
import Messages from './Messages'


// helper functions

const getNewLabels = (action,selected, currentLabels, activeLabel) => {
  if (!selected || activeLabel === 'Apply label') return currentLabels
  if (action === 'add'){
    const labelExists = currentLabels.find(label => label === activeLabel)
    const labels = labelExists ? currentLabels : [...currentLabels, activeLabel].sort()
    return labels
  }
  if (action === 'remove'){
    const labels = currentLabels.filter(label => label !== activeLabel)
    return labels
  }
}


class Inbox extends Component {
  constructor(){
    super()
    this.state = {seeds:[]}
  }

  componentDidMount = () => {
    this.getMessages()
  }

  getMessages = () => {
    axios.get('http://localhost:8082/api/messages')
      .then((response) => {
        console.log(response.data);
        this.setState({seeds: response.data})
      })
      .catch(console.error)
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

  handleAddLabel = label => {
    const seeds = this.state.seeds.map(el => ({...el, labels: getNewLabels('add',el.selected, el.labels,label)}))
    this.setState({seeds})
  }

  handleRemoveLabel = label => {
    const seeds = this.state.seeds.map(el => ({...el, labels: getNewLabels('remove',el.selected, el.labels,label)}))
    this.setState({seeds})
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
    const handleRemoveLabel = this.handleRemoveLabel
    return (
      <div className='container'>
        <Toolbar {...{seeds, handleSelectAll, markAsRead, markAsUnread, handleDelete, handleAddLabel, handleRemoveLabel}}/>
        <Messages {...{seeds, handleMessageSelect,  handleMessageStar, handleSelectAll}}/>
      </div>
    )
  }
}


export default Inbox
