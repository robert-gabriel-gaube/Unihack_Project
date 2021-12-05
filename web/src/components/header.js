import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryGreenButton from './primary-green-button'
import projectStyles from '../style.module.css'
import styles from './header.module.css'

const Header = (props) => {
  return (
    <div className={` ${styles['Header']} ${styles[props.rootClassName]} `}>
      <nav className={styles['Nav']}>
        <div className={styles['container']}>
          <Link
            to="/"
            className={` ${styles['navlink']} ${projectStyles['large']} `}
          >
            Cyclr
          </Link>
          <div className={styles['Menu']}>
            <Link
              to="/"
              className={` ${styles['navlink1']} ${projectStyles['large']} `}
            >
              Home
            </Link>
            <Link
              to="C:\Users\faurs\Desktop\cycler_bs\swap.html"
              className={` ${styles['navlink1']} ${projectStyles['large']} `}
            >
              Listings
            </Link>
            <Link
              to="C:\Users\faurs\Desktop\cycler_bs\about.html"
              className={` ${styles['navlink2']} ${projectStyles['large']} `}
            >
              About
            </Link>
          </div>
          <Link to="/register" className={styles['navlink1']}>
          <div className={styles['container1']}>
            <div className={styles['container2']}>
              <Link to={{ pathname: "C:\Users\faurs\Desktop\cycler_bs\register.html" }}>
              <PrimaryGreenButton
                button="Join us now"
                rootClassName="rootClassName1"
                className={styles['component']}
              ></PrimaryGreenButton>
              </Link>
            </div>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          </Link>
        </div>
      </nav>
    </div>
  )
}

Header.defaultProps = {
  rootClassName: '',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
}

export default Header
