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
          <h1>Visual KPIs<br />Docs</h1>
        <div>
          <p>Everything in One Place, <br /> From Any Place</p>
          <HomeBtn text={'Get started'} btnClass={'headerBtn'} route={'/docs/how-visual-kpi-works'}/>
        </div>
      </div>
    </header>
  );
}