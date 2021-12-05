import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import Header from '../components/header'
import PrimaryGreenButton from '../components/primary-green-button'
import Footer from '../components/footer'
import styles from './about.module.css'

const About = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>About - Cyclr.</title>
        <meta property="og:title" content="About - Cyclr." />
      </Helmet>
      <div className={styles['Header']}></div>
      <div className={styles['Hero']}>
        
        <PrimaryGreenButton
          button="Join us now"
          rootClassName="rootClassName4"
          className={styles['component2']}
        ></PrimaryGreenButton>
      </div>
      <Footer rootClassName="rootClassName2"></Footer>
    </div>
  )
}

export default About
