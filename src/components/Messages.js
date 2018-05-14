import React from 'react'
import Message from './Message'


const Messages = props => {
  const {seeds, ...methods} = props
  return (
    seeds.map(data => <Message {...data} key={data.id} {...methods}/>).reverse()
  )
}


export default Messages
