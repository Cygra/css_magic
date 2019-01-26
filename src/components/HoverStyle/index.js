import React from 'react'
import Item from "../Item"
import './HoverStyle.less'


const HoverStyle = () => (
  <Item title="HoverStyle">
    <a className="item-a hoverstyle-item" href="/">hover me ~</a>
    <br />
    <a className="item-b hoverstyle-item" href="/">hover me ~</a>
  </Item>
)

export default HoverStyle
