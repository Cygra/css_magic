import React from 'react'
import Item from "../Item"
import './Filter.less'
import dva from '../../images/dva.jpg'

const divMap = [
  'grayscale(1)',
  'blur(2px)',
  'sepia(0.75)',
  'saturate(6)',
  'hue-rotate(90deg)',
  'invert(0.8)',
  'opacity(0.5)',
  'brightness(3)',
  'contrast(4)'
]

const Filter = () => (
  <Item title="Filter">
    <div className="filter-div">
      <img src={dva} alt="dva"/>
      <code>no filter;</code>
    </div>
    {divMap.map(i => (
      <div className="filter-div" key={i}>
        <img src={dva} alt="dva" style={{ filter: i }} />
        <code>filter: {i};</code>
      </div>
    ))}
  </Item>
)

export default Filter
