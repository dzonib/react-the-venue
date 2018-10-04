import React from 'react'

const CountdownHelper = ({number, letter}) => {
  return (
    <div className="countdown_item">
    <div className="countdown_time">{number}</div>
    <div className="countdown_tag">{letter}</div>
  </div>
  )
}

export default CountdownHelper;