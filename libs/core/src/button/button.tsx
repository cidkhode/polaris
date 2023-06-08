import React from 'react'

export const Button = () => {
  const onClick = () => {
    console.log("Clicking this button!")
  }
  return (
    <button onClick={onClick}>Hello World</button>
  )
}
