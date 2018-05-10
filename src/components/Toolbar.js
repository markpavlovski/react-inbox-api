import React from 'react'

const isDisabled = (seeds) => {
  return seeds.some(data => data.selected) ? '' : 'disabled'
}

const Toolbar = props => {
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{
              props.seeds.reduce((acc,data)=> data.read ? acc : acc+1,0)
            }</span>
            unread messages
          </p>

          <a className="btn btn-danger">
            <i className="fa fa-plus"></i>
          </a>

          <button className="btn btn-default">
            <i className="fa fa-minus-square-o"></i>
          </button>

          <button className='btn btn-default' disabled={isDisabled(props.seeds)}> Mark As Read</button>

          <button className='btn btn-default' disabled={isDisabled(props.seeds)}>Mark As Unread</button>

          <select className='form-control, label-select' disabled={isDisabled(props.seeds)}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className='form-control, label-select' disabled={isDisabled(props.seeds)}>
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className='btn btn-default' disabled={isDisabled(props.seeds)}><i className="fa fa-trash-o" /></button>
        </div>
      </div>
    )
  }


export default Toolbar
