import React from 'react'
import Item from '../Item'

const Console = () => {
  console.log('%c Yoho ~', 'color: red')
  console.log('%c Yoho ~', 'color: blue')
  console.log('%c Yoho ~', 'color: white; background-color: black')

  return (
    <Item title="Console">
      <code>console.log('%c Yoho ~', 'color: red')</code>
      <br />
      <code>console.log('%c Yoho ~', 'color: blue')</code>
      <br />
      <code>console.log('%c Yoho ~', 'color: white; background-color: black')</code>
      <br />
      <div>
        Open your Dev Tools to checkout!&nbsp;
        <span role="img" aria-label="right-hand-side">
          👉
        </span>
      </div>
      <br />
      <ul>
        <li>
          On Mac: press&nbsp;<code>⌘ Command + ⌥ Option + i</code>.
        </li>
        <li>
          On Windows & Linux: press&nbsp;<code>Ctrl + Shift + j</code>&nbsp;or&nbsp;<code>F12</code>
          .
        </li>
      </ul>
    </Item>
  )
}

export default Console
