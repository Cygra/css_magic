import React from 'react'
import Item from '../Item'
import './Cursor.less'

const cursorMap = [
  'auto',
  'default',
  'none',
  'pointer',
  'wait',
  'text',
  'move',
  'help',
  'context-menu',
  'progress',
  'cell',
  'crosshair',
  'vertical-text',
  'alias',
  'copy',
  'no-drop',
  'not-allowed',
  'all-scroll',
  'col-resize',
  'row-resize',
  'n-resize',
  'e-resize',
  's-resize',
  'w-resize',
  'ns-resize',
  'ew-resize',
  'ne-resize',
  'nw-resize',
  'se-resize',
  'sw-resize',
  'nesw-resize',
  'nwse-resize',
]

const Cursor = () => (
  <Item title="Cursor">
    <ul>
      {cursorMap.map(i => <li key={i} style={{ cursor: i }}>{i}</li>)}
    </ul>
    <p>And the cursor can als be an image&nbsp;
      <span role="img" aria-label="right-hand-side">👉</span>
      <span className="image-cursor-span"></span>
      <code>cursor: url(../../images/lock_black.png), auto;</code>
    </p>
  </Item>
)

export default Cursor
