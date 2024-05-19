import React from 'react'

const Label = ({title,html,states}) => {
  return (
    <div>
      <label htmlFor={html}className='form-label'value={states}>{title}</label>
    </div>
  )
}

export default Label
