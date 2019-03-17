import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './Header.less'

const Header = ({ siteTitle }) => (
  <div className="site-header">
    <div className="site-header-content">
      <h1>
        <Link to="/" className="site-header-link">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
