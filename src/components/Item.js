import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ children, title }) => (
  <div>
    <div style={{
      height: '1px',
      backgroundColor: '#000',
      marginBottom: '10px'
    }}></div>
    <h3>> {title}</h3>
    <div className={`${title.toLowerCase()}-item`}>
      {children}
    </div>
  </div>
)

Item.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Item
