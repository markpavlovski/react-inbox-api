import React from 'react'
import Message from './Message'


const Messages = props => {
  const {handleMessageSelect, handleMessageStar} = props
  return (
    props.seeds.map(data => <Message {...data} key={data.id} handleMessageSelect={handleMessageSelect} handleMessageStar={handleMessageStar}/>)
  )
}


export default Messages
