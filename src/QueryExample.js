import React, { PropTypes } from 'react'

/* http://localhost:3000/query?test=hehehe */
export default function QueryExample (props) {
  const location = props.location
  return (
    <div>
      search the key word ,then it will list the most releted five video ,and the most releted video
      will show up on the main monitor then select video to change video
    </div>
  )
}