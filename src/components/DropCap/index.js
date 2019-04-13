import React from 'react'
import Item from '../Item'
import './DropCap.less'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique lobortis orci ac lacinia. Fusce eu purus eget diam vehicula auctor nec eu elit. Morbi consequat facilisis orci vel malesuada. Donec ultrices molestie sollicitudin. Aliquam pharetra libero enim. Donec et suscipit massa. Donec dui odio, dignissim non sodales et, tincidunt a sapien. Phasellus elit nibh, adipiscing sed blandit vel, interdum et arcu.'

const DropCap = () => (
  <Item title="Drop Cap">
    <p id="first-letter">
      The <b>::first-letter</b> selector is used to add a style to the first letter of the specified
      selector.&nbsp;
      {lorem}
    </p>
    <p id="use-span">
      <b>
        <span className="drop-cap">U</span>se an extra span.&nbsp;
      </b>
      {lorem}
    </p>
  </Item>
)

export default DropCap
