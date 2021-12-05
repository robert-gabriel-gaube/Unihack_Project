import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './outline-green-button.module.css'

const OutlineGreenButton = (props) => {
  return (
    <div className={styles['container']}>
      <button
        className={` ${styles['button']} ${projectStyles['button']} ${projectStyles['buttonSmall']} `}
      >
        {props.button}
      </button>
    </div>
  )
}

OutlineGreenButton.defaultProps = {
  button: 'Button',
}

OutlineGreenButton.propTypes = {
  button: PropTypes.string,
}

export default OutlineGreenButton
