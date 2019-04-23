import React from 'react'
import Item from '../Item'
import './Shapes.less'

const Shapes = () => {
  return (
    <Item title="Shapes">
      <div id="circle" />
      <div id="oval" />
      <div id="triangle-up" />
      <div id="triangle-down" />
      <div id="triangle-left" />
      <div id="triangle-right" />
      <div id="triangle-top-left" />
      <div id="triangle-top-right" />
      <div id="triangle-bottom-left" />
      <div id="triangle-bottom-right" />
      <div id="trapezoid" />
      <div id="parallelogram" />
    </Item>
  )
}

export default Shapes
