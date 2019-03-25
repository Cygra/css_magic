import React, { useState } from 'react'
import dva from '../../images/dva.jpg'
import Slider from 'rc-slider';

export const FilterItem = ({
  title,
  from,
  to,
  defaultVal,
  unit = '',
}) => {
  const [val, setVal] = useState(defaultVal);
  return (
    <div className="filter-div">
      <img src={dva} alt="dva" style={{ filter: `${title}(${val}${unit})` }} />
      <code>{title}({val}{unit});</code>
      <Slider
        min={from}
        max={to}
        onChange={setVal}
        value={val}
        trackStyle={{
          backgroundColor: '#3f51b5',
          height: 10,
          borderRadius: 2,
          cursor: 'ew-resize',
        }}
        step={to - from >= 10 ? to - from >= 90 ? 10 : 1 : 0.1}
      />
    </div>
  )

}
