import React from 'react'
import Message from './Message'


const Messages = props => {
  return (
    props.seeds.map(data => <Message {...data} key={data.id}/>)
  )
}


export default Messages
