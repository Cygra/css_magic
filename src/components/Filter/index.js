import React from 'react'
import Item from '../Item'
import './Filter.less'
import dva from '../../images/dva.jpg'
import { FilterItem } from './FilterItem'

const divMap = [
  {
    title: 'grayscale',
    from: 0,
    to: 1,
    defaultVal: 0.5,
  },
  {
    title: 'blur',
    from: 0,
    to: 10,
    defaultVal: 2,
    unit: 'px',
  },
  {
    title: 'sepia',
    from: 0,
    to: 1,
    defaultVal: 0.8,
  },
  {
    title: 'saturate',
    from: 0,
    to: 10,
    defaultVal: 6,
  },
  {
    title: 'hue-rotate',
    from: 0,
    to: 180,
    defaultVal: 90,
    unit: 'deg',
  },
  {
    title: 'invert',
    from: 0,
    to: 1,
    defaultVal: 0.8,
  },
  {
    title: 'opacity',
    from: 0,
    to: 1,
    defaultVal: 0.5,
  },
  {
    title: 'brightness',
    from: 0,
    to: 10,
    defaultVal: 3,
  },
  {
    title: 'contrast',
    from: 0,
    to: 10,
    defaultVal: 4,
  },
]

const Filter = () => (
  <Item title="Filter">
    Drag the slider&nbsp;
    <div className="filter-slider" />
    &nbsp;..
    <div className="filter-item-container">
      <div className="filter-div">
        <img src={dva} alt="dva" />
        <code>no filter;</code>
      </div>
      {divMap.map(i => (
        <FilterItem {...i} key={i.title} />
      ))}
    </div>
    and see&nbsp;
    <a href="https://cygra.github.io/easy-filter/" target="_blank">
      easy-filter
    </a>
  </Item>
)

export default Filter
