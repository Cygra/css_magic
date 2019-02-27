import React, { useState } from 'react'
import Item from "../Item"
import './Input.less'
import cx from 'classnames'

const Input = () => (
  <Item title="Input">
    {inputA()}
    {inputB()}
  </Item>
)

const submitBtn = val => (
  <button onClick={() => alert(`${val ? val : 'Nothing'} submitted!`)}>
    Submit
  </button>
)

const inputA = () => {
  const [inputVal, setInput] = useState('');
  const [isInputFocus, setInputFocus] = useState(false)
  const cxNames = cx(
    "input-title",
    { 'on-top': inputVal !== '' || isInputFocus }
  )

  return (
    <div className="input-a">
      <div className="input-container">
        <input
          value={inputVal}
          onChange={e => setInput(e.target.value)}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
        />
        <div className={cxNames}>Input something here!</div>
      </div>
      {submitBtn(inputVal)}
      <button onClick={() => setInput('')}>Clear</button>
    </div>
  )
}

const inputB = () => {
  const [inputVal, setInput] = useState('');
  const [isInputFocus, setInputFocus] = useState(false)

  return (
    <div className="input-b">
      <input
        className={cx({ 'is-input-focus': isInputFocus })}
        value={inputVal}
        onChange={e => setInput(e.target.value)}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        placeholder="Input something here!"
      />
      <div className={cx(
        'btn-container',
        { 'is-input-focus': isInputFocus }
      )}>
        {submitBtn(inputVal)}
      </div>
    </div>
  )
}

export default Input
