import React from 'react'

const Card = ({name , surname}) => {
  return (
    <div>
        <div className="card-header">
            <h1>{name}</h1>
        </div>
        <div className="card-content">
            <p>{surname}</p>
        </div>
    </div>
  )
}

export default Card