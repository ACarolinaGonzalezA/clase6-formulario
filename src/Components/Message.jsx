import React from 'react'

const Message = ({ text }) => {
  return text ? <p>{text}</p> : null;
}

export default Message