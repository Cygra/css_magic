import React from 'react'
import Item from '../Item'
import './Glitch.less'

const TEXT = 'GLITCH'

const Glitch = () => (
  <Item title="Glitch">
    <div className="glitch-string-0">{TEXT}</div>
    <div className="glitch-string-1 cover">{TEXT}</div>
    <div className="glitch-string-2 cover">{TEXT}</div>
    <div className="glitch-string-3 cover">{TEXT}</div>
  </Item>
)

export default Glitch
