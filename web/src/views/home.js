import React from 'react'

import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom"
 
import Header from '../components/header'
import PrimaryGreenButton from '../components/primary-green-button'
import OutlineGreenButton from '../components/outline-green-button'
import FeatureCard from '../components/feature-card'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Cyclr.</title>
        <meta property="og:title" content="Cyclr." />
      </Helmet>
      <Header rootClassName="rootClassName1"></Header>
      <div className={styles['Hero']}>
        <div className={styles['container01']}>
          <div className={styles['Card']}>
            <h1
              className={` ${styles['text']} ${projectStyles['headingOne']} `}
            >
              One man&apos;s trash
            </h1>
            <h1
              className={` ${styles['text01']} ${projectStyles['headingOne']} `}
            >
              Is another man&apos;s treasure.
            </h1>
            <span className={` ${styles['text02']} ${projectStyles['lead']} `}>
              In the society of tomorrow, we must learn to throw away less.
              Start with Cyclr.
            </span>
            <div className={styles['container02']}>
              <div className={styles['container03']}>
              <Link to="/Reg" className={styles['navlink1']}>
                <PrimaryGreenButton
                  button="register"
                  rootClassName="rootClassName"
                  className={styles['component1']}
                ></PrimaryGreenButton>
                </Link>
              </div>
              <Link to="/Log" className={styles['navlink1']}>
                <OutlineGreenButton
                  button="login"
                  className={styles['component2']}
                ></OutlineGreenButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGNvbW11bml0eXxlbnwwfHx8fDE2Mzg2MDExMzA&amp;ixlib=rb-1.2.1&amp;h=1500"
        className={styles['image']}
      />
      <section className={styles['Features']}>
        <FeatureCard
          text="Get something you need, for something you don't."
          title="Swap"
          image_src="/playground_assets/cube1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Do some good, and also get rid of clutter."
          title="Donate"
          image_src="/playground_assets/person1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Waste less and make use of what you already have."
          title="Be Greener"
          image_src="/playground_assets/rocket1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Put money to better use."
          title="Save up"
          image_src="/playground_assets/credit%20card1.svg"
        ></FeatureCard>
      </section>
      <section className={styles['Container04']}>
        <div className={styles['container05']}>
          <h1
            className={` ${styles['text03']} ${projectStyles['headingOne']} `}
          >
            <span className={styles['text04']}>
              If it ain&apos;t broke, why throw it away?
            </span>
          </h1>
          <span className={styles['text05']}>
            <span>Put it to good use, and also get something in return.</span>
          </span>
        </div>
        <div className={styles['container06']}>
          <div className={styles['container07']}>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1575839127400-6b9e36bf97f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHx1c2VkfGVufDB8fHx8MTYzODYwODQ2MA&amp;ixlib=rb-1.2.1&amp;h=1500"
              className={styles['image1']}
            />
            <span className={` ${styles['text07']} ${projectStyles['small']} `}>
              <span>
                “If it can’t be reduced, reused, repaired, rebuilt, refurbished,
                refinished, resold, recycled, or composted, then it should be
                restricted, designed or removed from production.”
              </span>
              <br></br>
              <span>– Pete Seeger</span>
            </span>
          </div>
          <div className={styles['container08']}>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1596609548086-85bbf8ddb6b9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxjb25zdW1lcmlzbXxlbnwwfHx8fDE2Mzg2MDg2NjQ&amp;ixlib=rb-1.2.1&amp;h=1500"
              className={styles['image2']}
            />
            <div className={styles['container09']}>
              <h3 className={projectStyles['headingTwo']}>
                You may not want to use something you have, but someone else
                might.
              </h3>
              <p>
                Maybe it&apos;s not in your field, maybe you lost interest in
                it. Why keep it?
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer rootClassName="rootClassName"></Footer>
    </div>
  )
}

export default Home
