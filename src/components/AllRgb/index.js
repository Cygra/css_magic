import React, { useState } from 'react'
import Item from "../Item"
import './AllRgb.less'

const styleEnum = {
  1: i => `${i}, 0, 0), rgb(${i}, 0, 255`,
  2: i => `${i}, 0, 0), rgb(${i}, 255, 0`,
  3: i => `0, ${i}, 0), rgb(0, ${i}, 255`,
  4: i => `0, ${i}, 0), rgb(255, ${i}, 0`,
  5: i => `0, 0, ${i}), rgb(0, 255, ${i}`,
  6: i => `0, 0, ${i}), rgb(255, 0, ${i}`,
}

const AllRgb = () => {
  const [index, setIndex] = useState(1);
  return (
    <Item title="All Rgb Colors">
      <div className="btn-group">
        <button onClick={() => setIndex(1)}>1</button>
        <button onClick={() => setIndex(2)}>2</button>
        <button onClick={() => setIndex(3)}>3</button>
        <button onClick={() => setIndex(4)}>4</button>
        <button onClick={() => setIndex(5)}>5</button>
        <button onClick={() => setIndex(6)}>6</button>
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

export default AllRgb
