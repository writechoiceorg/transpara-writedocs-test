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
        <div className="first_column">
          <h1>Visual KPI Docs</h1>
          <p>Visual KPIs small hero text.</p>
        </div>
        <div className="second_column">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <HomeBtn text={'How Visual KPI Works'} btnClass={'headerBtn'} route={'/docs/how-visual-kpi-works'}/>
        </div>
      </div>
    </header>
  );
}