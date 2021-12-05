import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './footer.module.css'

const Footer = (props) => {
  return (
    <footer className={` ${styles['Footer']} ${styles[props.rootClassName]} `}>
      <div className={styles['container']}>
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className={styles['image']}
        />
        <div className={styles['container1']}>
          <span className={` ${styles['text']} ${projectStyles['large']} `}>
            Pages
          </span>
          <span className={` ${styles['text1']} ${projectStyles['large']} `}>
            Login
          </span>
          <span className={` ${styles['text2']} ${projectStyles['large']} `}>
            Register
          </span>
          <Link
            to="/about"
            className={` ${styles['navlink']} ${projectStyles['large']} `}
          >
            About
          </Link>
        </div>
        <div className={styles['container2']}>
          <span className={styles['text3']}>Cyclr.</span>
          <span>Built by camelPak for UNIHACK.</span>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
