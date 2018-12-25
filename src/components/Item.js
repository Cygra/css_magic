import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ children, title }) => (
  <div>
    <div style={{
      height: '1px',
      backgroundColor: '#000',
      margin: '10px 0'
    }}></div>
    <h3>> {title}</h3>
    <div className={`${title.replace(/ /g, '-').toLowerCase()}-item`}>
      {children}
    </div>
  </div>
)

Item.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Item
