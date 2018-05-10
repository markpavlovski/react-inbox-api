import React from 'react'

const Message = props => (
  <div className = {[
    'row',
    'message',
     props.read ? 'read' : 'unread',
     props.selected ? 'selected' : ''
   ].join(' ')}>
    <div className="col-xs-1">
      <div className="row">
        <div className="col-xs-2">
          <input type="checkbox" />
        </div>
        <div className="col-xs-2">
          <i className={[
            'star',
            'fa',
            props.starred ? 'fa-star' : 'fa-star-o'
          ].join(' ')}/>
        </div>
      </div>
    </div>
    <div className="col-xs-11">
      <a href="#">
        {props.subject}
      </a>
    </div>
  </div>
)


export default Message
