import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './button.module.css'

const Button = (props) => {
  return (
    <div className={styles['container']}>
      <button className={projectStyles['button']}>{props.button}</button>
    </div>
  )
}

Button.defaultProps = {
  button: 'Button',
}

Button.propTypes = {
  button: PropTypes.string,
}

export default Button
