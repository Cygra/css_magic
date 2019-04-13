import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import './Header.less'

const Header = ({ siteTitle }) => {
  const [scrollY, setScrollY] = useState(() => {
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', () => setScrollY(window.scrollY))
    }
    return 0
  })

  const skewAngle = 90 - scrollY > 0 ? (90 - scrollY) / 9 : 0
  return (
    <div
      className="site-header"
      style={{
        height: `${150 - scrollY > 60 ? 150 - scrollY : 60}px`,
      }}
    >
      <div
        className="pseudo-before"
        style={{ transform: `skew(0deg, ${skewAngle}deg) translateX(-50%)` }}
      />
      <div className="site-header-content">
        <h1>
          <Link to="/" className="site-header-link">
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div
        className="pseudo-after"
        style={{ transform: `skew(0deg, -${skewAngle}deg) translateX(50%)` }}
      />
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
