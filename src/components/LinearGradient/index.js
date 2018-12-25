import React, { useState } from 'react'
import Item from "../Item"
import './LinearGradient.less'

const styleEnum = {
  1: i => `0, ${i}, 0), rgb(0, ${i}, 255`,
  2: i => `${i}, 0, 0), rgb(${i}, 0, 255`,
  3: i => `${i}, 0, 0), rgb(${i}, 255, 0`,
}

const LinearGradient = () => {
  const [index, setIndex] = useState(1);
  return (
    <Item title="Linear Gradient">
      <div className="btn-group">
        <button onClick={() => setIndex(1)}>1</button>
        <button onClick={() => setIndex(2)}>2</button>
        <button onClick={() => setIndex(3)}>3</button>
      </div>

      <code>{'{ (1..256).each do |i|}'}</code>
      <code>background-image: linear-gradient(to right, rgb({styleEnum[index]('i')}))</code>
      {Array.from(Array(256).keys()).map(i => (
        <div
          key={i}
          className='color-line'
          style={{
            backgroundImage: 'linear-gradient(to right, rgb(' + styleEnum[index](i) + '))'
          }}
        />
      ))}
    </Item>
  )
}

export default LinearGradient
