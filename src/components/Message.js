import React from 'react'

const Message = props => {
    return (
      <div className = {`row message` + (props.read ? 'row message read' : 'row message unread')}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
            </div>
            <div className="col-xs-2">
              <i className={'star fa fa-star' + (props.starred ? '' : '-o')}></i>
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
  }


export default Message
