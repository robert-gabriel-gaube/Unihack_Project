import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './feature-card.module.css'

const FeatureCard = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <h5 className={` ${styles['text']} ${projectStyles['headingThree']} `}>
        {props.title}
      </h5>
      <span className={styles['text1']}>{props.text}</span>
    </div>
  )
}

FeatureCard.defaultProps = {
  text: 'Get the latest design ideas and turn it into reality.',
  title: 'Design',
  rootClassName: '',
}

FeatureCard.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard
