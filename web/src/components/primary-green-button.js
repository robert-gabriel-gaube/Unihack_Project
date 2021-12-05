import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './primary-green-button.module.css'

const PrimaryGreenButton = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button
        className={` ${styles['button']} ${projectStyles['button']} ${projectStyles['buttonSmall']} `}
      >
        {props.button}
      </button>
    </div>
  )
}

PrimaryGreenButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

PrimaryGreenButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default PrimaryGreenButton
