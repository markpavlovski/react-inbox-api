import React from 'react'

const Message = props => {
  const {id,read,selected,starred,subject,labels,handleMessageSelect,handleMessageStar} = props
  return (
    <div>
      <div className={['row', 'message', read ? 'read': 'unread',selected? 'selected': ''].join(' ')}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={selected
                  ? 'checked'
                  : ''} onChange={event => handleMessageSelect(id, event.target.checked)}/>
            </div>
            <div className="col-xs-2">
              <i className={[
                  'star', 'fa', starred
                    ? 'fa-star'
                    : 'fa-star-o'
                ].join(' ')} onClick={event => handleMessageStar(id)}/>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {
            labels.map((label,idx) => (<span className="label label-warning" key={`label-${idx}`}>{label}</span>))
          }
          <a href="#">
            {subject}
          </a>
        </div>
      </div>
      <div className="row message-body hidden">
        <div className="col-xs-11 col-xs-offset-1">
          This is the body of the message.
        </div>
      </div>
    </div>
)}

export default Message
