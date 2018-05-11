import React from 'react'

const isDisabled = seeds => seeds.some(data => data.selected) ? '' : 'disabled'

const setSquareBox = seeds => {
  if (seeds.every(data => data.selected)) return 'fa fa-check-square-o'
  if (seeds.some(data => data.selected)) return 'fa fa-minus-square-o'
  return 'fa fa-square-o'
}


const Toolbar = props => {
    const {seeds, handleSelectAll, markAsRead, markAsUnread, handleDelete, handleAddLabel, handleRemoveLabel} = props
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{
              seeds.reduce((acc,data)=> data.read ? acc : acc+1,0)
            }</span>
            unread messages
          </p>

          <a className="btn btn-danger">
            <i className="fa fa-plus"></i>
          </a>

          <button className="btn btn-default" onClick={handleSelectAll}>
            <i className={setSquareBox(seeds)} ></i>
          </button>

          <button className='btn btn-default' disabled={isDisabled(seeds)} onClick={markAsRead}> Mark As Read</button>

          <button className='btn btn-default' disabled={isDisabled(seeds)} onClick={markAsUnread}>Mark As Unread</button>

          <select className='form-control, label-select' disabled={isDisabled(seeds)} onChange={event => handleAddLabel(event.target.value)}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className='form-control, label-select' disabled={isDisabled(seeds)} onChange={event => handleRemoveLabel(event.target.value)}>
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className='btn btn-default' disabled={isDisabled(seeds)} onClick={handleDelete}><i className="fa fa-trash-o" /></button>
        </div>
      </div>
    )
  }


export default Toolbar
