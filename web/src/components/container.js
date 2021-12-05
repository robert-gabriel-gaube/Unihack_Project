import React from 'react'

import PropTypes from 'prop-types'

import styles from './container.module.css'

const Container = (props) => {
  return (
    <div className={styles['container']}>
      <span className={styles['text']}>{props.text}</span>
    </div>
  )
}

Container.defaultProps = {
  text: 'Username:',
}

Container.propTypes = {
  text: PropTypes.string,
}

export default Container
