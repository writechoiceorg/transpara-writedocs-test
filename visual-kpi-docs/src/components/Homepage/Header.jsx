import React from 'react';
import clsx from 'clsx';
import HomeBtn from '../buttons/HomeBtn';
import styles from '../../pages/index.module.css';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';



export default function HomepageHeader() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container header_container">
        <h1>Quickstart<br />Joget DX</h1>
        <p>Joget empowers everyone to digitalize at speed and scale.</p>
        <HomeBtn text={'Get Started'} btnClass={'headerBtn'} route={'docs/joget-docs'}/>
      </div>
    </header>
  );
}