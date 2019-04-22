import React from 'react'
import Item from '../Item'
import './Shapes.less'

const Shapes = () => {
  return (
    <Item title="Shapes">
      <div className="shape-div" id="circle" />
      <div className="shape-div" id="oval" />
      <div className="shape-div" id="triangle-up" />
      <div className="shape-div" id="triangle-down" />
      <div className="shape-div" id="triangle-left" />
      <div className="shape-div" id="triangle-right" />
      <div className="shape-div" id="triangle-top-left" />
      <div className="shape-div" id="triangle-top-right" />
      <div className="shape-div" id="triangle-bottom-left" />
      <div className="shape-div" id="triangle-bottom-right" />
      <div className="shape-div" id="trapezoid" />
      <div className="shape-div" id="parallelogram" />
    </Item>
  )
}

export default Shapes
