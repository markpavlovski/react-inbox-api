import React from 'react'
import Message from './Message'


const Messages = props => {
  const {seeds, ...methods} = props
  console.log(methods);
  return (
    seeds.map(data => <Message {...data} key={data.id} {...methods}/>)
  )
}


export default Messages
